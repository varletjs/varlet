import fs from 'fs'
import { resolve } from 'path'

const varletESMBundleFile = resolve(__dirname, '../varlet-ui/es/varlet.esm.js')
const varletArea = resolve(__dirname, '../varlet-ui/json/area.json')
const varletTouchEmulatorFile = resolve(__dirname, '../varlet-touch-emulator/index.js')
const varletCSSFile = resolve(__dirname, '../varlet-ui/es/style.css')

function copyVarletPlugin() {
  return {
    name: 'copy-varlet',
    buildStart() {
      fs.copyFileSync(varletESMBundleFile, resolve('public/varlet.esm.js'))
      fs.writeFileSync(resolve('public/varlet-area.js'), `export default ${fs.readFileSync(varletArea)}`)
      fs.copyFileSync(varletTouchEmulatorFile, resolve('public/varlet-touch-emulator.js'))
      fs.copyFileSync(varletCSSFile, resolve('public/varlet.css'))
    },
  }
}

export default async () => {
  return {
    base: './',
    plugins: [copyVarletPlugin()],
    server: {
      host: '0.0.0.0',
      port: 3000,
    },
    build: {
      outDir: 'site',
    },
  }
}
