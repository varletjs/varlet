import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import { resolve } from 'path'
import { defineConfig, Plugin } from 'vite'

const varletESMBundleFile = resolve(__dirname, '../varlet-ui/es/varlet.esm.js')
const varletTouchEmulatorFile = resolve(__dirname, '../varlet-touch-emulator/index.js')
const varletCSSFile = resolve(__dirname, '../varlet-ui/es/style.css')

function copyVarletPlugin(): Plugin {
  return {
    name: 'copy-varlet',
    buildStart() {
      fs.copyFileSync(varletESMBundleFile, resolve('public/varlet.esm.js'))
      fs.copyFileSync(varletTouchEmulatorFile, resolve('public/varlet-touch-emulator.js'))
      fs.copyFileSync(varletCSSFile, resolve('public/varlet.css'))
    },
  }
}

export default defineConfig(async () => {
  return {
    base: './',
    plugins: [vue(), copyVarletPlugin()],
    build: {
      outDir: 'site',
    },
  }
})
