import fs from 'fs'
import { defineConfig, Plugin } from 'vite'
import { fileURLToPath, URL } from 'node:url'

function toPath(path: string) {
  return fileURLToPath(new URL(path, import.meta.url))
}

function copyVarletDependencies(): Plugin {
  return {
    name: 'copy-varlet-dependencies',

    buildStart() {
      fs.copyFileSync(toPath('../varlet-ui/es/varlet.esm.js'), toPath('./public/varlet.esm.js'))
      fs.copyFileSync(toPath('../varlet-touch-emulator/iife.js'), toPath('./public/varlet-touch-emulator.js'))
      fs.copyFileSync(toPath('../varlet-ui/es/style.css'), toPath('./public/varlet.css'))
      fs.writeFileSync(
        toPath('./public/varlet-area.js'),
        `export default ${fs.readFileSync(toPath('../varlet-ui/json/area.json'))}`
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

  optimizeDeps: {
    exclude: ['@vue/repl'],
  },

  build: {
    outDir: 'site',
  },

  define: {
    __APP_ENABLE_PREVIEW__: process.env.ENABLE_PREVIEW,
  },

  plugins: [copyVarletDependencies()],
})
