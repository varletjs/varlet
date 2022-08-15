import { createOptions } from '../../shared/options'
import { pathExistsSync } from 'fs-extra'
import { SRC_DIR } from '../../shared/constant'
import { resolve } from 'path'

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
    type: async () => (pathExistsSync(resolve(SRC_DIR, createOptions.name)) ? 'toggle' : null),
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
const localePrompt = {
  name: 'locale',
  type: 'toggle',
  message: 'Whether components need to be internationalized ?',
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

export { componentStylePrompt, localePrompt, projectNamePrompt }
