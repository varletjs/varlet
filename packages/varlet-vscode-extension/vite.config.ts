import { defineConfig } from 'vite-plus'

export default defineConfig({
  pack: {
    entry: 'src/extension.ts',
    outDir: 'dist',
    hash: false,
    fixedExtension: false,
    deps: {
      neverBundle: ['vscode'],
    },
  },
})
