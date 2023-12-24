import { reactive, watchEffect } from 'vue'
import { compileFile, File, StoreOptions } from '@vue/repl'
import { utoa, atou } from './utils/encode'
import { usePreviewVersion } from './utils/env'
import { Dialog, Snackbar } from '@varlet/ui'
import * as defaultCompiler from 'vue/compiler-sfc'
import type { Store, SFCOptions, StoreState, OutputModes } from '@vue/repl'

const varletImports = {
  '@varlet/ui': usePreviewVersion ? './varlet.esm.js' : 'https://cdn.jsdelivr.net/npm/@varlet/ui/es/varlet.esm.js',
  '@varlet/ui/json/area.json': './varlet-area.js',
}

const appFile = 'src/App.vue'
const varletReplPlugin = 'src/varlet-repl-plugin.js'
const welcomeCode = `\
<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('Hello Varlet!')
</script>

<template>
  <var-button type="primary">{{ msg }}</var-button>
</template>
`
const appWrapperFile = 'src/AppWrapper.vue'
const appWrapperCode = `\
<script setup>
import App from './${stripSrcPrefix(appFile)}'
import { installVarletUI } from './${stripSrcPrefix(varletReplPlugin)}'

installVarletUI()
</script>

<template>
  <App />
</template>
`

const importMapFile = 'import-map.json'
const tsconfigFile = 'tsconfig.json'
const tsconfig = {
  compilerOptions: {
    allowJs: true,
    checkJs: true,
    jsx: 'Preserve',
    target: 'ESNext',
    module: 'ESNext',
    moduleResolution: 'Bundler',
    allowImportingTsExtensions: true,
  },
  vueCompilerOptions: {
    target: 3.3,
  },
}

function getVarletReplPluginCode(version: string | 'latest' | 'preview') {
  let varletCss
  let varletTouchEmulator

  if (version === 'latest') {
    varletCss = 'https://cdn.jsdelivr.net/npm/@varlet/ui/es/style.css'
    varletTouchEmulator = 'https://cdn.jsdelivr.net/npm/@varlet/touch-emulator/iife.js'
  } else if (version === 'preview') {
    varletCss = './varlet.css'
    varletTouchEmulator = './varlet-touch-emulator.js'
  } else {
    varletCss = `https://cdn.jsdelivr.net/npm/@varlet/ui@${version}/es/style.css`
    varletTouchEmulator = `https://cdn.jsdelivr.net/npm/@varlet/touch-emulator@${version}/iife.js`
  }

  return `\
import VarletUI from '@varlet/ui'
import { getCurrentInstance } from 'vue'

const varletCss = '${varletCss}'
const varletTouchEmulator = '${varletTouchEmulator}'

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

  const script = document.createElement('script')
  script.src = varletTouchEmulator
  document.body.appendChild(script)

  const themeMap = {
    lightTheme: null,
    darkTheme: VarletUI.Themes.dark,
    md3LightTheme: VarletUI.Themes.md3Light,
    md3DarkTheme: VarletUI.Themes.md3Dark,
  }

  const theme = parent.document.documentElement.getAttribute('theme')

  if (theme) {
    VarletUI.StyleProvider(themeMap[theme])
  }

  window.addEventListener('message', ({ data }) => {
    if (data.action === 'theme-change') {
      VarletUI.StyleProvider(themeMap[data.value])
    }
  })

  document.addEventListener('click', () => {
    window.parent.document.dispatchEvent(new Event('click'))
  })

  const instance = getCurrentInstance()
  instance.appContext.app.use(VarletUI)
}

export function appendStyle() {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = varletCss
    link.onload = resolve
    link.onerror = reject
    document.head.appendChild(link)
  })
}`
}

export class ReplStore implements Store {
  state: StoreState

  vueVersion?: string

  varletVersion?: string

  compiler = defaultCompiler

  options?: SFCOptions

  initialShowOutput: boolean

  initialOutputMode: OutputModes = 'preview'

  private defaultVueRuntimeURL: string

  private defaultVueServerRendererURL: string

  private pendingCompiler: Promise<any> | null = null

  constructor({
    serializedState = '',
    defaultVueRuntimeURL = `https://cdn.jsdelivr.net/npm/@vue/runtime-dom/dist/runtime-dom.esm-browser.js`,
    defaultVueServerRendererURL = `https://cdn.jsdelivr.net/npm/@vue/server-renderer/dist/server-renderer.esm-browser.js`,
    showOutput = false,
    outputMode = 'preview',
  }: StoreOptions = {}) {
    const files: StoreState['files'] = {}

    if (serializedState) {
      const saved = JSON.parse(atou(serializedState))
      // eslint-disable-next-line no-restricted-syntax, guard-for-in
      for (const filename in saved) {
        setFile(
          files,
          filename,
          saved[filename],
          !import.meta.env.DEV && (`src/${filename}` === varletReplPlugin || `src/${filename}` === appWrapperFile)
        )
      }
    } else {
      setFile(files, appFile, welcomeCode)
    }

    if (!files[appWrapperFile]) {
      setFile(files, appWrapperFile, appWrapperCode, !import.meta.env.DEV)
    }

    if (!files[varletReplPlugin]) {
      setFile(
        files,
        varletReplPlugin,
        getVarletReplPluginCode(usePreviewVersion ? 'preview' : 'latest'),
        !import.meta.env.DEV
      )
    }

    this.defaultVueRuntimeURL = defaultVueRuntimeURL
    this.defaultVueServerRendererURL = defaultVueServerRendererURL
    this.initialShowOutput = showOutput
    this.initialOutputMode = outputMode as OutputModes

    this.state = reactive({
      files,
      mainFile: appWrapperFile,
      activeFile: files[appFile],
      errors: [],
      vueRuntimeURL: this.defaultVueRuntimeURL,
      vueServerRendererURL: this.defaultVueServerRendererURL,
      resetFlip: true,
    })

    this.initImportMap()
    this.initTsConfig()
  }

  init() {
    // eslint-disable-next-line no-return-assign
    watchEffect(() => compileFile(this, this.state.activeFile).then((errs) => (this.state.errors = errs)))

    this.state.errors = []
    // eslint-disable-next-line no-restricted-syntax
    for (const file in this.state.files) {
      if (file !== appFile) {
        compileFile(this, this.state.files[file]).then((errs) => this.state.errors.push(...errs))
      }
    }
  }

  private initTsConfig() {
    if (!this.state.files[tsconfigFile]) {
      this.setTsConfig(tsconfig)
    }
  }

  setTsConfig(config: any) {
    this.state.files[tsconfigFile] = new File(tsconfigFile, JSON.stringify(config, undefined, 2))
  }

  getTsConfig() {
    try {
      return JSON.parse(this.state.files[tsconfigFile].code)
    } catch {
      return {}
    }
  }

  setActive(filename: string) {
    this.state.activeFile = this.state.files[filename]
  }

  addFile(fileOrFilename: string | File): void {
    const file = typeof fileOrFilename === 'string' ? new File(fileOrFilename) : fileOrFilename
    this.state.files[file.filename] = file
    if (!file.hidden) this.setActive(file.filename)
  }

  deleteFile(filename: string) {
    if (filename === varletReplPlugin || filename === appWrapperFile) {
      Snackbar.warning('You cannot delete this file because the varlet depends on it')
      return
    }

    Dialog(`Are you sure you want to delete ${stripSrcPrefix(filename)}?`).then((action) => {
      if (action === 'confirm') {
        if (this.state.activeFile.filename === filename) {
          this.state.activeFile = this.state.files[this.state.mainFile]
        }
        delete this.state.files[filename]
      }
    })
  }

  renameFile(oldFilename: string, newFilename: string) {
    const { files } = this.state
    const file = files[oldFilename]

    if (!file) {
      this.state.errors = [`Could not rename "${oldFilename}", file not found`]
      return
    }

    if (!newFilename || oldFilename === newFilename) {
      this.state.errors = [`Cannot rename "${oldFilename}" to "${newFilename}"`]
      return
    }

    file.filename = newFilename

    const newFiles: Record<string, File> = {}

    // Preserve iteration order for files
    // eslint-disable-next-line no-restricted-syntax
    for (const name in files) {
      if (name === oldFilename) {
        newFiles[newFilename] = file
      } else {
        newFiles[name] = files[name]
      }
    }

    this.state.files = newFiles

    if (this.state.mainFile === oldFilename) {
      this.state.mainFile = newFilename
    }

    // eslint-disable-next-line no-return-assign
    compileFile(this, file).then((errs) => (this.state.errors = errs))
  }

  serialize() {
    const files = this.getFiles()
    const importMap = files[importMapFile]
    if (importMap) {
      const { imports } = JSON.parse(importMap)
      if (imports.vue === this.defaultVueRuntimeURL) {
        delete imports.vue
      }
      if (imports['vue/server-renderer'] === this.defaultVueServerRendererURL) {
        delete imports['vue/server-renderer']
      }
      if (!Object.keys(imports).length) {
        delete files[importMapFile]
      } else {
        files[importMapFile] = JSON.stringify({ imports }, null, 2)
      }
    }
    return '#' + utoa(JSON.stringify(files))
  }

  getFiles() {
    const exported: Record<string, string> = {}
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const filename in this.state.files) {
      const normalized = filename === importMapFile ? filename : filename.replace(/^src\//, '')
      exported[normalized] = this.state.files[filename].code
    }

    return exported
  }

  private forceSandboxReset() {
    this.state.resetFlip = !this.state.resetFlip
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
              'vue/server-renderer': this.defaultVueServerRendererURL,
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
        } else {
          json.imports.vue = fixURL(json.imports.vue)
        }
        if (!json.imports['vue/server-renderer']) {
          json.imports['vue/server-renderer'] = this.defaultVueServerRendererURL
        } else {
          json.imports['vue/server-renderer'] = fixURL(json.imports['vue/server-renderer'])
        }
        map.code = JSON.stringify(json, null, 2)
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }
  }

  getImportMap() {
    try {
      return JSON.parse(this.state.files[importMapFile].code)
    } catch (e) {
      this.state.errors = [`Syntax error in import-map.json: ${(e as Error).message}`]
      return {}
    }
  }

  setImportMap(map: { imports: Record<string, string>; scopes?: Record<string, Record<string, string>> }) {
    this.state.files[importMapFile]!.code = JSON.stringify(map, null, 2)
  }

  setVarletVersion(version: string) {
    this.varletVersion = version
    const importMap = this.getImportMap()
    const imports = importMap.imports || (importMap.imports = {})
    imports['@varlet/ui'] =
      version === 'preview' ? `./varlet.esm.js` : `https://cdn.jsdelivr.net/npm/@varlet/ui@${version}/es/varlet.esm.js`
    setFile(this.state.files, varletReplPlugin, getVarletReplPluginCode(version), !import.meta.env.DEV)
    compileFile(this, this.state.files[varletReplPlugin]).then((errs) => this.state.errors.push(...errs))
    this.setImportMap(importMap)
    this.forceSandboxReset()

    console.info(`[varlet] Now using Varlet version: ${version}`)
  }

  async setVueVersion(version: string) {
    this.vueVersion = version
    const compilerUrl = `https://cdn.jsdelivr.net/npm/@vue/compiler-sfc@${version}/dist/compiler-sfc.esm-browser.js`
    const runtimeUrl = `https://cdn.jsdelivr.net/npm/@vue/runtime-dom@${version}/dist/runtime-dom.esm-browser.js`
    const ssrUrl = `https://cdn.jsdelivr.net/npm/@vue/server-renderer@${version}/dist/server-renderer.esm-browser.js`
    this.pendingCompiler = import(/* @vite-ignore */ compilerUrl)
    this.compiler = await this.pendingCompiler
    this.pendingCompiler = null
    this.state.vueRuntimeURL = runtimeUrl
    this.state.vueServerRendererURL = ssrUrl
    const importMap = this.getImportMap()
    const imports = importMap.imports || (importMap.imports = {})
    imports.vue = runtimeUrl
    imports['vue/server-renderer'] = ssrUrl
    this.setImportMap(importMap)
    this.forceSandboxReset()

    console.info(`[@vue/repl] Now using Vue version: ${version}`)
  }

  resetVueVersion() {
    this.vueVersion = undefined
    this.compiler = defaultCompiler
    this.state.vueRuntimeURL = this.defaultVueRuntimeURL
    this.state.vueServerRendererURL = this.defaultVueServerRendererURL
    const importMap = this.getImportMap()
    const imports = importMap.imports || (importMap.imports = {})
    imports.vue = this.defaultVueRuntimeURL
    imports['vue/server-renderer'] = this.defaultVueServerRendererURL
    this.setImportMap(importMap)
    this.forceSandboxReset()
    console.info(`[@vue/repl] Now using default Vue version`)
  }
}

function setFile(files: Record<string, File>, filename: string, content: string, hidden = false) {
  // prefix user files with src/
  // for cleaner Volar path completion when using Monaco editor
  const normalized =
    filename !== importMapFile && filename !== tsconfigFile && !filename.startsWith('src/')
      ? `src/${filename}`
      : filename
  files[normalized] = new File(normalized, content, hidden)
}

function fixURL(url: string) {
  return url.replace('https://sfc.vuejs', 'https://play.vuejs')
}

function stripSrcPrefix(file: string) {
  return file.replace(/^src\//, '')
}
