import ejs from 'ejs'
import fse from 'fs-extra'
import logger from '../shared/logger.js'
import { bigCamelize, camelize, kebabCase } from '@varlet/shared'
import { input, confirm, select } from '@inquirer/prompts'
import { resolve } from 'path'
import { glob } from '../shared/fsUtils.js'
import { getVarletConfig } from '../config/varlet.config.js'
import { SRC_DIR, dirname } from '../shared/constant.js'

const { removeSync, readFileSync, copySync, pathExistsSync, writeFileSync, renameSync } = fse

type CodingStyle = 'tsx' | 'vue'

export interface CreateCommandOptions {
  internal?: boolean
  name?: string
  locale?: boolean
  sfc?: boolean
  tsx?: boolean
}

interface RenderData {
  kebabCaseName: string
  bigCamelizeName: string
  camelizeName: string
  locale?: boolean
  style: CodingStyle
  namespace: string
  bigCamelizeNamespace: string
}

async function renderTemplates(componentFolder: string, componentFolderName: string, renderData: RenderData) {
  const templates = await glob(`${componentFolder}/**/*.ejs`)

  templates.forEach((template) => {
    const templateCode = readFileSync(template, { encoding: 'utf-8' })
    const code = ejs.render(templateCode, renderData)
    const file = template
      .replace('[componentName]', camelize(componentFolderName))
      .replace('[ComponentName]', bigCamelize(componentFolderName))
      .replace('.ejs', '')

    writeFileSync(file, code)
    removeSync(template)
  })
}

export async function create(options: CreateCommandOptions) {
  logger.title('\n📦📦 Create a component ! \n')

  const { namespace } = await getVarletConfig()
  const renderData: RenderData = {
    namespace,
    bigCamelizeNamespace: bigCamelize(namespace),
    kebabCaseName: 'component-name',
    bigCamelizeName: 'ComponentName',
    camelizeName: 'componentName',
    style: 'vue',
  }

  const name = options.name
    ? options.name
    : await input({
        message: 'Name of the component created: ',
        default: renderData.kebabCaseName,
      })

  renderData.kebabCaseName = kebabCase(name)
  renderData.camelizeName = camelize(name)
  renderData.bigCamelizeName = bigCamelize(name)
  const componentFolder = resolve(SRC_DIR, renderData.kebabCaseName)
  const componentFolderName = renderData.kebabCaseName

  if (pathExistsSync(componentFolder)) {
    logger.warning(`${componentFolderName} already exist and cannot be recreated...`)
    return
  }

  const locale = options.locale
    ? options.locale
    : await confirm({
        message: 'Whether to use i18n?',
        default: false,
      })

  renderData.locale = locale

  // Determine whether the parameter carries a component style
  if (options.sfc || options.tsx) {
    renderData.style = options.sfc ? 'vue' : 'tsx'
  } else {
    const style: CodingStyle = await select({
      message: 'Which style do you use to write your component ?',
      choices: [
        { name: 'sfc', value: 'vue' },
        { name: 'tsx', value: 'tsx' },
      ],
      default: 'vue',
    })

    renderData.style = style
  }

  copySync(resolve(dirname, '../../../template/create'), componentFolder)
  await renderTemplates(componentFolder, componentFolderName, renderData)

  if (options.internal) {
    removeSync(resolve(componentFolder, './example/locale/index.ts'))
    renameSync(
      resolve(componentFolder, './example/locale/_index.ts'),
      resolve(componentFolder, './example/locale/index.ts')
    )
  } else {
    removeSync(resolve(componentFolder, './example/locale/_index.ts'))
  }

  if (!renderData.locale) {
    removeSync(resolve(componentFolder, '/example/locale'))
  }

  if (renderData.style !== 'vue') {
    removeSync(resolve(componentFolder, `${renderData.bigCamelizeName}.vue`))
  }

  if (renderData.style !== 'tsx') {
    removeSync(resolve(componentFolder, `${renderData.bigCamelizeName}.tsx`))
  }

  logger.success(`Create ${componentFolderName} component success!`)
}
