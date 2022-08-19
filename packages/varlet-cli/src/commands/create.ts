import { bigCamelize } from '@varlet/shared'
import ejs from 'ejs'
import fs from 'fs-extra'
import { get } from 'lodash'
import { resolve, parse } from 'path'
import createQuestion from '../shared/createQuestion'
import logger from '../shared/logger'
import { getVarletConfig } from '../config/varlet.config'
import { SRC_DIR } from '../shared/constant'

interface CmdTypes {
  locale?: boolean
  sfc?: boolean
  jsx?: boolean
  tsx?: boolean
}
interface CreateOptions {
  name: string
  locale?: boolean
  projectName?: string
  style?: string
  namespace?: string
}
const createOptions: CreateOptions = {
  name: 'componentName',
}
const templateFiles: string[] = [
  '__tests__/index.spec.js',
  'example/index.vue',
  `less.less`,
  `tsx.tsx`,
  `jsx.jsx`,
  `vue.vue`,
  'index.ts',
]
const renameFiles: string[] = ['tsx', 'vue', 'less', 'jsx']
const removeFiles: string[] = renameFiles.filter((item) => item !== 'less')

// create projectName question
const projectNamePrompt = [
  {
    name: 'projectName',
    type: 'text',
    message: 'The name of the component created: ',
    initial: createOptions.name,
    onState: (state: any) => {
      createOptions.name = state.value
    },
    active: 'Yes',
    inactive: 'No',
  },
  {
    name: 'overwrite',
    type: async () => (fs.pathExistsSync(resolve(SRC_DIR, createOptions.name)) ? 'toggle' : null),
    initial: false,
    message: async () => {
      return `⚠️ ⚠️  files "${createOptions.name}" is not empty. Overwrite the current Folder and continue?`
    },
    active: 'Yes',
    inactive: 'No',
  },
  {
    name: 'overwrite',
    type: (prev: any, values: any) => {
      if (values.overwrite === false) {
        throw new Error('Operation cancelled')
      }
      return null
    },
  },
]

// create internationalized files question
const localePrompt = {
  name: 'locale',
  type: 'toggle',
  message: 'Whether components need to be internationalized ?',
  initial: false,
  active: 'Yes',
  inactive: 'No',
}

// create component style question
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

// create command action
export async function create(cmd: CmdTypes) {
  logger.title('\n📦📦 Create a Varlet Component ! \n')

  // realize projectName
  await createQuestion(projectNamePrompt, createOptions)
  createOptions.name = bigCamelize(createOptions.name)
  createOptions.namespace = bigCamelize(get(getVarletConfig(), 'namespace'))

  // Determine whether the parameter carries internationalization.
  if (cmd.locale) {
    createOptions.locale = cmd.locale
  } else {
    await createQuestion(localePrompt, createOptions)
  }

  // Determine whether the parameter carries a component style
  if (cmd.sfc || cmd.jsx || cmd.tsx) {
    const cmdToExt = Object.keys(cmd)[0]
    createOptions.style = cmdToExt === 'sfc' ? 'vue' : cmdToExt
  } else {
    await createQuestion(componentStylePrompt, createOptions)
  }

  // Copy files to Current working directory
  const srcPath = `${process.cwd()}/src/${createOptions.projectName}`
  await fs.copy(resolve(__dirname, '../../template/create'), srcPath)

  // Compile ejs and change the file name
  await Promise.all(templateFiles.map((file: string) => ejsRender(file, createOptions)))
  await Promise.all(
    renameFiles.map((file: string) => {
      return fs.rename(
        `${srcPath}/${file}.${file}`,
        `${srcPath}/${file === 'less' ? createOptions.projectName : createOptions.name}.${file}`
      )
    })
  )

  // Remove unnecessary files
  !createOptions.locale && fs.remove(`${srcPath}/example/locale`)
  removeFiles
    .filter((item) => item !== createOptions.style)
    .map((item) => fs.remove(`${srcPath}/${createOptions.name}.${item}`))

  // need refactor
  logger.success(`Create ${createOptions.name} Component success!`)
  logger.success(`----------------------------`)
  logger.success(`${createOptions.name}/`)
  logger.success(`|- __tests__/ # Unit test folder`)
  logger.success(`|- docs/ # Internationalized document folder`)
  logger.success(`|- example/ # Mobile phone example code`)
  logger.success(`|- example/locale # Example locale`)
  logger.success(`|- ${createOptions.name}.${createOptions.style}`)
  logger.success(`|- index.ts # Component entry, the folder where the file exists will be exposed to the user`)
}

// ejs render function
async function ejsRender(filePath: string, options: any): Promise<void> {
  try {
    // Get the current render file information
    const file = parse(filePath)
    // Compile the root directory
    const dest = resolve(`${process.cwd()}/src`, options.projectName)
    // Ejs files that need to be compiled
    const readFilePath = resolve(dest, file.dir, `${file.name}.ejs`)
    // Converted file
    const outputFilePath = resolve(dest, filePath)
    // Generate buffer
    const templateCode = await fs.readFile(readFilePath, { encoding: 'utf-8' })
    // Compile code
    const code = ejs.render(templateCode, options)
    await fs.outputFile(outputFilePath, code)
    await fs.remove(readFilePath)
  } catch (error) {
    console.log(error)
  }
}
