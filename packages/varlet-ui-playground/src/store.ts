import { reactive, watchEffect, version } from 'vue'
import * as defaultCompiler from 'vue/compiler-sfc'
import type { Store, SFCOptions, StoreState, OutputModes } from '@vue/repl'
import { compileFile, File } from '@vue/repl'
import { utoa, atou } from './utils/encode'
import { Snackbar } from '@varlet/ui'

const publicPath = process.env.NODE_ENV === 'production' ? 'https://varlet-ui-playground.vercel.app/' : './'

const defaultMainFile = 'App.vue'
const varletReplPlugin = 'varlet-repl-plugin.js'
const varletImports = {
  '@varlet/ui': `${publicPath}varlet.esm.js`,
  '@varlet/touch-emulator': `${publicPath}varlet-touch-emulator.js`,
  '@varlet/ui/json/area.json': `${publicPath}varlet-area.js`,
}
const varletCss = `${publicPath}varlet.css`

const welcomeCode = `\
<script setup lang='ts'>
import { ref } from 'vue'

const msg = ref('Hello Varlet!')
</script>

<template>
  <var-button type="primary">{{ msg }}</var-button>
</template>
`

const varletReplPluginCode = `\
import VarletUI, { Context } from '@varlet/ui'
import '@varlet/touch-emulator'
import { getCurrentInstance } from 'vue'

Context.touchmoveForbid = false

await appendStyle()

export function installVarletUI() {
  const { parent } = window

  const style = document.createElement('style')
  style.innerHTML = \`
    body {
      min-height: 100vh;
      padding: 16px;
      margin: 0;
      color: var(--color-text);
      background-color: var(--color-body);
    }

    *::-webkit-scrollbar {
      display: none;
    }
  \`
  document.head.appendChild(style)

  if (parent.document.documentElement.classList.contains('dark')) {
    VarletUI.StyleProvider(VarletUI.Themes.dark)
  }

  window.addEventListener('message', ({ data }) => {
    if (data.action === 'theme-change') {
      VarletUI.StyleProvider(data.value === 'dark' ? VarletUI.Themes.dark : null)
    }
  })

  const instance = getCurrentInstance()
  instance.appContext.app.use(VarletUI)
}

export function appendStyle() {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '${varletCss}'
    link.onload = resolve
    link.onerror = reject
    document.body.appendChild(link)
  })
}
`
const MAIN_CONTAINER = 'Playground.vue'
const containerCode = `\
<script setup>
import App from './${defaultMainFile}'
import { installVarletUI } from './${varletReplPlugin}'

installVarletUI()
</script>

<template>
  <App />
</template>
`

export class ReplStore implements Store {
  state: StoreState

  compiler = defaultCompiler

  options?: SFCOptions

  initialShowOutput: boolean

  initialOutputMode: OutputModes = 'preview'

  private readonly defaultVueRuntimeURL: string

  constructor({
    serializedState = '',
    defaultVueRuntimeURL = `https://unpkg.com/@vue/runtime-dom@${version}/dist/runtime-dom.esm-browser.js`,
    showOutput = false,
    outputMode = 'preview',
  }: {
    serializedState?: string
    showOutput?: boolean
    // loose type to allow getting from the URL without inducing a typing error
    outputMode?: OutputModes | string
    defaultVueRuntimeURL?: string
  }) {
    let files: StoreState['files'] = {}

    if (serializedState) {
      const saved = JSON.parse(atou(serializedState))
      // eslint-disable-next-line no-restricted-syntax
      for (const filename of Object.keys(saved)) {
        files[filename] = new File(filename, saved[filename])
      }
    } else {
      files = {
        [defaultMainFile]: new File(defaultMainFile, welcomeCode),
      }
    }

    this.defaultVueRuntimeURL = defaultVueRuntimeURL
    this.initialShowOutput = showOutput
    this.initialOutputMode = outputMode as OutputModes

    let mainFile = defaultMainFile
    if (!files[mainFile]) {
      mainFile = Object.keys(files)[0]
    }

    files[MAIN_CONTAINER] = new File(MAIN_CONTAINER, containerCode, true)

    this.state = reactive({
      mainFile: MAIN_CONTAINER,
      files,
      activeFile: files[mainFile],
      errors: [],
      vueRuntimeURL: this.defaultVueRuntimeURL,
    })

    this.initImportMap()

    // varlet inject
    // @ts-ignore
    this.state.files[varletReplPlugin] = new File(varletReplPlugin, varletReplPluginCode, !import.meta.env.DEV)

    watchEffect(() => compileFile(this, this.state.activeFile))

    // eslint-disable-next-line no-restricted-syntax
    for (const file in this.state.files) {
      if (file !== defaultMainFile) {
        compileFile(this, this.state.files[file])
      }
    }
  }

  setActive(filename: string) {
    this.state.activeFile = this.state.files[filename]
  }

  addFile(fileOrFilename: string | File) {
    const file = typeof fileOrFilename === 'string' ? new File(fileOrFilename) : fileOrFilename
    this.state.files[file.filename] = file
    if (!file.hidden) this.setActive(file.filename)
  }

  deleteFile(filename: string) {
    if (filename === varletReplPlugin) {
      Snackbar.warning('Varlet depends on this file')
      return
    }

    // eslint-disable-next-line no-alert
    if (confirm(`Are you sure you want to delete ${filename}?`)) {
      if (this.state.activeFile.filename === filename) {
        this.state.activeFile = this.state.files[this.state.mainFile]
      }
      delete this.state.files[filename]
    }
  }

  serialize() {
    return '#' + utoa(JSON.stringify(this.getFiles()))
  }

  getFiles() {
    const exported: Record<string, string> = {}
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const filename in this.state.files) {
      exported[filename] = this.state.files[filename].code
    }
    return exported
  }

  async setFiles(newFiles: Record<string, string>, mainFile = defaultMainFile) {
    const files: Record<string, File> = {}
    if (mainFile === defaultMainFile && !newFiles[mainFile]) {
      files[mainFile] = new File(mainFile, welcomeCode)
    }
    // eslint-disable-next-line no-restricted-syntax
    for (const [filename, file] of Object.entries(newFiles)) {
      files[filename] = new File(filename, file)
    }
    // eslint-disable-next-line no-restricted-syntax
    for (const file of Object.values(files)) {
      await compileFile(this, file)
    }
    this.state.mainFile = mainFile
    this.state.files = files
    this.initImportMap()
    this.setActive(mainFile)
  }

  private initImportMap() {
    const map = this.state.files['import-map.json']
    if (!map) {
      this.state.files['import-map.json'] = new File(
        'import-map.json',
        JSON.stringify(
          {
            imports: {
              vue: this.defaultVueRuntimeURL,
              ...varletImports,
            },
          },
          null,
          2
        )
      )
    } else {
      try {
        const json = JSON.parse(map.code)
        if (!json.imports.vue) {
          json.imports.vue = this.defaultVueRuntimeURL
          map.code = JSON.stringify(json, null, 2)
        }
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }
  }

  getImportMap() {
    try {
      return JSON.parse(this.state.files['import-map.json'].code)
    } catch (e) {
      this.state.errors = [`Syntax error in import-map.json: ${(e as Error).message}`]
      return {}
    }
  }
}
