import fs from 'fs'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig, Plugin } from 'vite'

const cwd = process.cwd()

function copyVarletDependencies(): Plugin {
  return {
    name: 'copy-varlet-dependencies',

    buildStart() {
      fs.copyFileSync(resolve(cwd, '../varlet-ui/es/varlet.esm.js'), resolve(cwd, 'public/varlet.esm.js'))
      fs.copyFileSync(
        resolve(cwd, '../varlet-touch-emulator/index.js'),
        resolve(cwd, 'public/varlet-touch-emulator.js')
      )
      fs.copyFileSync(resolve(cwd, '../varlet-ui/es/style.css'), resolve(cwd, 'public/varlet.css'))
      fs.writeFileSync(
        resolve(cwd, 'public/varlet-area.js'),
        `export default ${fs.readFileSync(resolve(cwd, '../varlet-ui/json/area.json'))}`
      )
    },
  }
}

export default defineConfig({
  base: './',

  server: {
    host: '0.0.0.0',
    port: 3000,
  },

  build: {
    outDir: 'site',
  },

  plugins: [
    copyVarletDependencies(),
    components({
      resolvers: [VarletUIResolver()],
    }),
    autoImport({
      resolvers: [VarletUIResolver({ autoImport: true })],
    }),
  ],
})
