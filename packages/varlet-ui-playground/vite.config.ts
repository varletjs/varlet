import fs from 'fs'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig, Plugin } from 'vite'

function copyVarletDependencies(): Plugin {
  return {
    name: 'copy-varlet-dependencies',

    buildStart() {
      fs.copyFileSync('../varlet-ui/es/varlet.esm.js', './public/varlet.esm.js')
      fs.copyFileSync('../varlet-touch-emulator/index.js', './public/varlet-touch-emulator.js')
      fs.copyFileSync('../varlet-ui/es/style.css', './public/varlet.css')
      fs.writeFileSync('./public/varlet-area.js', `export default ${fs.readFileSync('../varlet-ui/json/area.json')}`)
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
