import { bigCamelize, kebabCase } from '@varlet/shared'
import ejs from 'ejs'
import fs, { removeSync, outputFileSync, readFileSync, copySync, pathExistsSync, renameSync } from 'fs-extra'
import { get } from 'lodash'
import { resolve, parse } from 'path'
import { createQuestion, createOptions } from '../shared/createQuestion'
import logger from '../shared/logger'
import { getVarletConfig } from '../config/varlet.config'
import { SRC_DIR } from '../shared/constant'
import { type PromptObject } from 'prompts'

interface CmdTypes {
  locale?: boolean
  sfc?: boolean
  tsx?: boolean
}

const templateFiles = ['__tests__/index.spec.js', 'example/index.vue', `less.less`, `tsx.tsx`, `vue.vue`, 'index.ts']
const renameFiles = ['tsx', 'vue', 'less']
const removeFiles = renameFiles.filter((item) => item !== 'less')

// create componentName question
const componentNamePrompt: Array<PromptObject> = [
  {
    name: 'componentName',
    type: 'text',
    message: 'The name of the component created: ',
    initial: createOptions.name,
    onState: (state: any) => {
      createOptions.name = state.value
      createOptions.kebabCaseName = kebabCase(state.value)
      createOptions.bigCamelizeName = bigCamelize(state.value)
    },
    active: 'Yes',
    inactive: 'No',
  },
  {
    name: 'overwrite',
    type: pathExistsSync(resolve(SRC_DIR, createOptions.kebabCaseName)) && 'toggle',
    initial: false,
    message: () =>
      `⚠️ ⚠️  files "${createOptions.kebabCaseName}" is not empty. Overwrite the current Folder and continue ?`,
    active: 'Yes',
    inactive: 'No',
  },
  {
    name: 'overwrite',
    type: (prev: any, values: any) => {
      console.log(prev)
      console.log(values)
      if (values.overwrite === false) {
        throw new Error('Operation cancelled')
      }
      return null
    },
  },
]

// create internationalized files question
const localePrompt: PromptObject = {
  name: 'locale',
  type: 'toggle',
  message: 'Whether components need to be internationalized ?',
  initial: false,
  active: 'Yes',
  inactive: 'No',
}

// create component style question
const componentStylePrompt: PromptObject = {
  name: 'style',
  type: 'select',
  message: 'What style do you use to write your components ?',
  choices: [
    { title: 'sfc', value: 'vue' },
    { title: 'tsx', value: 'tsx' },
  ],
}

// create command action
export async function create(cmd: CmdTypes) {
  logger.title('\n📦📦 Create a Varlet Component ! \n')

  // realize projectName
  await createQuestion(componentNamePrompt)
  createOptions.namespace = bigCamelize(get(getVarletConfig(), 'namespace'))

  // Determine whether the parameter carries internationalization.
  if (cmd.locale) {
    createOptions.locale = cmd.locale
  } else {
    await createQuestion(localePrompt)
  }

  // Determine whether the parameter carries a component style
  if (cmd.sfc || cmd.tsx) {
    console.log(cmd)
    const cmdToExt = Object.keys(cmd)[0]
    createOptions.style = cmdToExt === 'sfc' ? 'vue' : cmdToExt
  } else {
    await createQuestion(componentStylePrompt)
  }

  // Copy files to Current working directory
  const componentPath = resolve(SRC_DIR, createOptions.kebabCaseName)
  copySync(resolve(__dirname, '../../template/create'), componentPath)

  // Compile ejs and change the file name
  await Promise.all(templateFiles.map((file: string) => ejsRender(file, createOptions)))
  renameFiles.forEach((file: string) => {
    renameSync(
      `${componentPath}/${file}.${file}`,
      `${componentPath}/${file === 'less' ? createOptions.kebabCaseName : createOptions.bigCamelizeName}.${file}`
    )
  })

  // Remove unnecessary files
  !createOptions.locale && removeSync(`${componentPath}/example/locale`)
  removeFiles
    .filter((item) => item !== createOptions.style)
    .forEach((item) => fs.removeSync(`${componentPath}/${createOptions.bigCamelizeName}.${item}`))

  // need refactor
  logger.success(`Create ${createOptions.kebabCaseName} Component success!`)
  logger.success(`----------------------------`)
  logger.success(`${createOptions.kebabCaseName}/`)
  logger.success(`|- __tests__/ # Unit test folder`)
  logger.success(`|- docs/ # Internationalized document folder`)
  logger.success(`|- example/ # Mobile phone example code`)
  logger.success(`|- example/locale # Example locale`)
  logger.success(`|- ${createOptions.kebabCaseName}.${createOptions.style}`)
  logger.success(`|- index.ts # Component entry, the folder where the file exists will be exposed to the user`)
}

// ejs render function
async function ejsRender(filePath: string, options: any): Promise<void> {
  try {
    // Get the current render file information
    const file = parse(filePath)
    // Compile the root directory
    const dest = resolve(SRC_DIR, options.kebabCaseName)
    // Ejs files that need to be compiled
    const readFilePath = resolve(dest, file.dir, `${file.name}.ejs`)
    // Converted file
    const outputFilePath = resolve(dest, filePath)
    // Generate buffer
    const templateCode = readFileSync(readFilePath, { encoding: 'utf-8' })
    // Compile code
    const code = ejs.render(templateCode, options)
    outputFileSync(outputFilePath, code)
    removeSync(readFilePath)
  } catch (error) {
    console.log(error)
  }
}
