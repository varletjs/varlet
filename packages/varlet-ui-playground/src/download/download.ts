import { saveAs } from 'file-saver'
import { Dialog } from '@varlet/ui'

import index from './template/index.html?raw'
import main from './template/main.js?raw'
import pkg from './template/package.json?raw'
import config from './template/vite.config.js?raw'
import readme from './template/README.md?raw'

const excludes = ['varlet-repl-plugin.js', 'import-map.json', 'tsconfig.json', 'AppWrapper.vue']

export async function downloadProject(store: any) {
  const action = await Dialog({ title: 'Notice!', message: 'Download project files?' })

  if (action !== 'confirm') {
    return
  }

  const { default: JSZip } = await import('jszip')
  const zip = new JSZip()

  // basic structure
  zip.file('index.html', index)
  zip.file('package.json', pkg)
  zip.file('vite.config.js', config)
  zip.file('README.md', readme)

  // project src
  const src = zip.folder('src')!
  src.file('main.js', main)

  const files = store.getFiles()
  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const file in files) {
    if (!excludes.includes(file)) {
      const code = files[file]

      src.file(file, code)
    }
  }

  const blob = await zip.generateAsync({ type: 'blob' })
  saveAs(blob, 'varlet-playground-demo.zip')
}
