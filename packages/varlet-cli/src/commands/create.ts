import { bigCamelize, kebabCase } from '@varlet/shared'
import { prompt } from 'inquirer'
import ejs from 'ejs'
import { removeSync, outputFileSync, readFileSync, copySync, pathExistsSync } from 'fs-extra'
import { get } from 'lodash'
import { resolve, parse } from 'path'
import logger from '../shared/logger'
import { glob } from '../shared/fsUtils'
import { getVarletConfig } from '../config/varlet.config'
import { SRC_DIR } from '../shared/constant'

type CodingStyle = 'tsx' | 'vue'

interface CreateCommandOptions {
  name?: string
  locale?: boolean
  sfc?: boolean
  tsx?: boolean
}

interface CreateOptions {
  kebabCaseName: string
  bigCamelizeName: string
  locale?: boolean
  style: CodingStyle
  namespace: string
  bigCamelizeNamespace: string
}

const templateFiles = ['__tests__/index.spec.js', 'example/index.vue', `less.less`, 'index.ts']
const namespace = get(getVarletConfig(), 'namespace')

const createOptions: CreateOptions = {
  kebabCaseName: 'component-name',
  bigCamelizeName: 'componentName',
  style: 'vue',
  namespace,
  bigCamelizeNamespace: bigCamelize(namespace),
}

const ejsRender = (filePath: string, options: CreateOptions) => {
  const { dir, name, ext } = parse(filePath)

  const componentPath = resolve(SRC_DIR, options.kebabCaseName)
  const templatePath = resolve(componentPath, dir, `${name}.ejs`)

  const templateCode = readFileSync(templatePath, { encoding: 'utf-8' })
  const code = ejs.render(templateCode, options)

  if (ext.endsWith(name)) {
    filePath = `${name === 'less' ? createOptions.kebabCaseName : createOptions.bigCamelizeName}${ext}`
  }

  outputFileSync(resolve(componentPath, filePath), code)
}

const removeFiles = async (path: string) => {
  !createOptions.locale && removeSync(`${path}/example/locale`)
  ;(await glob(`${path}/**/*.ejs`)).forEach((file) => removeSync(file))
}

export async function create(options: CreateCommandOptions) {
  logger.title('\n📦📦 Create a Component ! \n')

  const { name } = options.name
    ? options
    : await prompt({
        name: 'name',
        message: 'Name of the component created: ',
        default: createOptions.kebabCaseName,
      })

  createOptions.kebabCaseName = kebabCase(name)
  createOptions.bigCamelizeName = bigCamelize(name)

  if (pathExistsSync(resolve(SRC_DIR, createOptions.kebabCaseName))) {
    logger.error(`${createOptions.kebabCaseName} already exist and cannot be recreated...`)
    return
  }

  // Determine whether the parameter carries internationalization.
  const { locale } = options.locale
    ? options
    : await prompt({
        name: 'locale',
        type: 'confirm',
        message: 'Whether to use i18n?',
        default: false,
      })

  createOptions.locale = locale

  // Determine whether the parameter carries a component style
  if (options.sfc || options.tsx) {
    createOptions.style = options.sfc ? 'vue' : 'tsx'
  } else {
    const { style } = await prompt({
      name: 'style',
      type: 'list',
      message: 'Which style do you use to write your component ?',
      choices: [
        { name: 'sfc', value: 'vue' },
        { name: 'tsx', value: 'tsx' },
      ],
      default: 'vue',
    })

    createOptions.style = style
  }

  // Copy files to Current working directory
  const componentPath = resolve(SRC_DIR, createOptions.kebabCaseName)
  copySync(resolve(__dirname, '../../template/create'), componentPath)

  // Compile ejs and change the file name
  ;[...templateFiles, `${createOptions.style}.${createOptions.style}`].forEach((file) => ejsRender(file, createOptions))

  await removeFiles(componentPath)

  logger.success(`Create ${createOptions.kebabCaseName} component success!`)
}
