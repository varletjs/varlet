import logger from '../shared/logger'
import inquirer from 'inquirer'
import { resolve } from 'path'
import { copy, pathExistsSync, readFileSync, writeFileSync } from 'fs-extra'
import { CLI_PACKAGE_JSON, CWD, GENERATORS_DIR } from '../shared/constant'

function generateGitIgnore(name: string) {
  writeFileSync(
    resolve(CWD, name, '.gitignore'),
    `\
node_modules

.varlet
.idea
.vscode
*.log
.DS_Store

site
lib
es
umd
coverage
highlight`
  )
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

export async function gen(name: string) {
  const dest = resolve(CWD, name)
  if (pathExistsSync(dest)) {
    logger.warning(`${name} already exists and cannot be recreated...`)
    return
  }

  const ret = await inquirer.prompt([
    {
      name: 'Please select your component library programming style',
      type: 'list',
      choices: ['sfc', 'tsx'],
    },
    {
      name: 'Whether to use i18n?',
      type: 'confirm',
    },
  ])

  const i18n = ret['Whether to use i18n?']
  const choice = ret['Please select your component library programming style']
  const dirName = i18n ? 'i18n' : 'default'

  const base = resolve(GENERATORS_DIR, 'base')
  const configBase = resolve(GENERATORS_DIR, 'config', dirName, 'base')
  const code = resolve(GENERATORS_DIR, 'config', dirName, choice)

  await copy(base, dest)
  await copy(configBase, dest)
  await copy(code, dest)
  syncVersion(name)
  generateGitIgnore(name)

  logger.success('Application generated successfully!')
  logger.info(`\
  cd ${name}
  pnpm install
  pnpm dev`)
  logger.success(`\
=======================
  Good luck have fun
=======================\
      `)
}
