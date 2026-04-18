import { defineConfig } from 'vite-plus'

export default defineConfig({
  pack: [
    {
      format: ['esm'],
      outDir: 'lib',
      fixedExtension: false,
      hash: false,
    },
    {
      format: ['cjs'],
      outDir: 'lib',
      fixedExtension: false,
      hash: false,
      deps: {
        alwaysBundle: ['rattail'],
      },
    },
  ],
})
