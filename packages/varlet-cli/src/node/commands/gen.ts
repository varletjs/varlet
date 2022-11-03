import logger from '../shared/logger.js'
import fse from 'fs-extra'
import inquirer from 'inquirer'
import { resolve } from 'path'
import { CLI_PACKAGE_JSON, CWD, GENERATORS_DIR } from '../shared/constant.js'

const { copy, pathExistsSync, readFileSync, writeFileSync, rename } = fse
const { prompt } = inquirer

type CodeStyle = 'tsx' | 'sfc'

interface GenCommandOptions {
  name?: string
  i18n?: boolean
  sfc?: boolean
  tsx?: boolean
}

function syncVersion(name: string) {
  const file = resolve(CWD, name, 'package.json')
  const pkg = JSON.parse(readFileSync(file, 'utf-8'))
  const cliPkg = JSON.parse(readFileSync(CLI_PACKAGE_JSON, 'utf-8'))

  Object.keys(pkg.devDependencies).forEach((key) => {
    if (key.startsWith('@varlet')) {
      pkg.devDependencies[key] = `^${cliPkg.version}`
    }
  })

  pkg.files = ['es', 'lib', 'umd', 'highlight', 'types']
  writeFileSync(file, JSON.stringify(pkg, null, 2))
}

export async function gen(options: GenCommandOptions) {
  logger.title('\n📦📦 Generate cli application ! \n')

  const { name } = options.name
    ? options
    : await prompt({
        name: 'name',
        message: 'Name of the generate application: ',
        default: 'varlet-cli-app',
      })
  const dest = resolve(CWD, name)

  if (pathExistsSync(dest)) {
    logger.error(`${name} already exists and cannot be recreated...`)
    return
  }

  let codeStyle: CodeStyle

  // Determine whether the parameter carries a coding style
  if (options.sfc || options.tsx) {
    codeStyle = options.sfc ? 'sfc' : 'tsx'
  } else {
    const { style } = await prompt({
      name: 'style',
      type: 'list',
      message: 'Please select your component library programming format',
      choices: ['sfc', 'tsx'],
    })

    codeStyle = style
  }

  const { i18n } = options.i18n
    ? options
    : await prompt({
        name: 'i18n',
        type: 'confirm',
        message: 'Whether to use i18n?',
        default: false,
      })

  const dirName = i18n ? 'i18n' : 'default'
  const base = resolve(GENERATORS_DIR, 'base')
  const configBase = resolve(GENERATORS_DIR, 'config', dirName, 'base')
  const code = resolve(GENERATORS_DIR, 'config', dirName, codeStyle)

  await copy(base, dest)
  await copy(configBase, dest)
  await copy(code, dest)
  await rename(resolve(dest, '_gitignore'), resolve(dest, '.gitignore'))
  syncVersion(name)

  logger.success('✨ Application generated successfully!')
  logger.info(`\
  cd ${name}
  git init (Generating .git folder to init git hooks)
  pnpm install
  pnpm dev`)
  logger.success(`\
=======================
  Good luck have fun
=======================\
      `)
}
