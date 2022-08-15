import { bigCamelize } from '@varlet/shared'
import gradient from 'gradient-string'
import { copy, remove } from 'fs-extra'
import { renameSync } from 'fs'
import { resolve } from 'path'
import createQuestion from '../shared/createQuestion'
import { ejsRender } from '../shared/ejsRender'
import logger from '../shared/logger'
import { getVarletConfig } from '../config/varlet.config'
import { get } from 'lodash'
import { createOptions } from '../shared/options'
import { componentStylePrompt, localePrompt, projectNamePrompt } from '../questions/create'

interface CmdTypes {
  locale?: boolean
  sfc?: boolean
  jsx?: boolean
  tsx?: boolean
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
export async function create(cmd: CmdTypes) {
  console.log(gradient('cyan', 'purple')('\n📦📦 Create a Varlet Component ! \n'))
  await createQuestion(projectNamePrompt, createOptions)
  createOptions.name = bigCamelize(createOptions.name)
  createOptions.namespace = bigCamelize(get(getVarletConfig(), 'namespace'))
  if (cmd.locale) {
    createOptions.locale = cmd.locale
  } else {
    await createQuestion(localePrompt, createOptions)
  }
  if (cmd.sfc || cmd.jsx || cmd.tsx) {
    const cmdToExt = Object.keys(cmd)[0]
    createOptions.style = cmdToExt === 'sfc' ? 'vue' : cmdToExt
  } else {
    await createQuestion(componentStylePrompt, createOptions)
  }
  const srcPath = `${process.cwd()}/src/${createOptions.projectName}`
  await copy(resolve(__dirname, '../../template/create'), srcPath)
  await Promise.all(templateFiles.map((file: string) => ejsRender(file, createOptions)))
  await Promise.all(
    renameFiles.map((file: string) => {
      return renameSync(`${srcPath}/${file}.${file}`, `${srcPath}/${createOptions.name}.${file}`)
    })
  )
  !createOptions.locale && remove(`${srcPath}/example/locale`)
  removeFiles
    .filter((item) => item !== createOptions.style)
    .map((item) => remove(`${srcPath}/${createOptions.name}.${item}`))

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
