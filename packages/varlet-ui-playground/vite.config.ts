import fs from 'fs'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'

const varletESMBundleFile = resolve(__dirname, '../varlet-ui/es/varlet.esm.js')
const varletTouchEmulatorFile = resolve(__dirname, '../varlet-touch-emulator/index.js')
const varletCSSFile = resolve(__dirname, '../varlet-ui/es/style.css')
const varletArea = resolve(__dirname, '../varlet-ui/json/area.json')

function copyVarletDependencies() {
  return {
    name: 'copy-varlet-dependencies',
    buildStart() {
      fs.copyFileSync(varletESMBundleFile, resolve('public/varlet.esm.js'))
      fs.copyFileSync(varletTouchEmulatorFile, resolve('public/varlet-touch-emulator.js'))
      fs.copyFileSync(varletCSSFile, resolve('public/varlet.css'))
      fs.writeFileSync(resolve('public/varlet-area.js'), `export default ${fs.readFileSync(varletArea)}`)
    },
  }
}

export default {
  base: './',
  plugins: [
    copyVarletDependencies(),
    components({
      resolvers: [VarletUIResolver()],
    }),
    autoImport({
      resolvers: [VarletUIResolver({ autoImport: true })],
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  build: {
    outDir: 'site',
  },
}
