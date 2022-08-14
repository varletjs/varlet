// import { bigCamelize } from '@varlet/shared'
import gradient from 'gradient-string'
import fs, { outputFile, pathExistsSync } from 'fs-extra'
import { renameSync } from 'fs'
import { resolve } from 'path'
import { DOCS_DIR_NAME, EXAMPLE_DIR_NAME, LOCALE_DIR_NAME, SRC_DIR, TESTS_DIR_NAME } from '../shared/constant'
import { getVarletConfig } from '../config/varlet.config'
import { get } from 'lodash'
import createQuestion from '../shared/createQuestion'
import { ejsRender } from '../shared/ejsRender'
import logger from '../shared/logger'
export const camelize = (s: string): string => s.replace(/-(\w)/g, (_: any, p: string) => p.toUpperCase())

export const bigCamelize = (s: string): string => camelize(s).replace(s.charAt(0), s.charAt(0).toUpperCase())
interface cmdTypes {
  disableI18n?: boolean
  locale?: boolean
  sfc?: boolean
  jsx?: boolean
  tsx?: boolean
}
interface options {
  name: string
  locale?: boolean
  projectName?: string
  style?: string
}
const options: options = {
  name: 'component name',
}
const projectNamePrompt = [
  {
    name: 'projectName',
    type: 'text',
    message: 'The name of the component created: ',
    initial: options.name,
    onState: (state: any) => {
      options.name = state.value
    },
    active: 'Yes',
    inactive: 'No',
  },
  {
    name: 'overwrite',
    type: async () => (pathExistsSync(resolve(SRC_DIR, options.name)) ? 'toggle' : null),
    initial: false,
    message: async () => {
      return `⚠️ ⚠️  files "${options.name}" is not empty. Overwrite the current Folder and continue?`
    },
    active: 'Yes',
    inactive: 'No',
  },
  {
    name: 'overwrite',
    type: (prev: any, values: any) => {
      console.log(values)
      if (values.overwrite === false) {
        throw new Error('Operation cancelled')
      }
      return null
    },
  },
]
const localePrompt = {
  name: 'locale',
  type: 'toggle',
  message: 'Whether components need to be internationalized (i18n) ?',
  initial: false,
  active: 'Yes',
  inactive: 'No',
}
const componentStylePrompt = {
  name: 'style',
  type: 'select',
  message: 'What style do you use to write your components? ?',
  choices: [
    { title: 'sfc', value: 'vue' },
    { title: 'jsx', value: 'jsx' },
    { title: 'tsx', value: 'tsx' },
  ],
}
export function templateFiles(): string[] {
  return ['__tests__/index.spec.js', 'example/index.vue', `less.less`, `tsx.tsx`, `jsx.jsx`, `vue.vue`, 'index.ts']
}
export function renameFiles(): string[] {
  return ['tsx', 'vue', 'less', 'jsx']
}
export function removeFiles(): string[] {
  return ['tsx', 'vue', 'jsx']
}
export async function create(cmd: cmdTypes) {
  console.log(gradient('cyan', 'purple')('\n📦📦 Create a Varlet Component ! \n'))
  await createQuestion(projectNamePrompt, options)
  if (cmd.locale) {
    options.locale = cmd.locale
  } else {
    await createQuestion(localePrompt, options)
  }
  if (cmd.sfc || cmd.jsx || cmd.tsx) {
    const cmdToExt = Object.keys(cmd)[0]
    options.style = cmdToExt === 'sfc' ? 'vue' : cmdToExt
  } else {
    await createQuestion(componentStylePrompt, options)
  }
  console.log(options.style)

  options.name = bigCamelize(options.name)
  const srcPath = `${process.cwd()}/src/${options.projectName}`
  await fs.copy(resolve(__dirname, '../../template/create'), srcPath)
  await Promise.all(templateFiles().map((file: string) => ejsRender(file, options)))
  await Promise.all(
    renameFiles().map((file: string) => {
      return renameSync(`${srcPath}/${file}.${file}`, `${srcPath}/${options.projectName}.${file}`)
    })
  )
  !options.locale && fs.remove(`${srcPath}/example/locale`)
  removeFiles()
    .filter((item) => item !== options.style)
    .map((item) => fs.remove(`${srcPath}/${options.name}.${item}`))
  logger.success(`Create ${options.name} Component success!`)
  logger.success(`----------------------------`)
  logger.success(`${options.name}/`)
  logger.success(`|- __tests__/ # Unit test folder`)
  logger.success(`|- docs/ # Internationalized document folder`)
  logger.success(`|- example/ # Mobile phone example code`)
  logger.success(`|- example/locale # Example locale`)
  logger.success(`|- ${options.name}.${options.style}`)
  logger.success(`|- index.ts # Component entry, the folder where the file exists will be exposed to the user`)
}
