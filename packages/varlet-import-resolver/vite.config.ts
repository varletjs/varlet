import { defineConfig } from 'vite-plus'

export default defineConfig({
  pack: {
    format: ['esm', 'cjs'],
    outDir: 'lib',
    fixedExtension: false,
    hash: false,
  },
})
