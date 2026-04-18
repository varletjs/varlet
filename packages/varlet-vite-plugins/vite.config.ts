import { defineConfig } from 'vite-plus'

export default defineConfig({
  pack: {
    outDir: 'lib',
    dts: true,
    fixedExtension: false,
    hash: false,
  },
})
