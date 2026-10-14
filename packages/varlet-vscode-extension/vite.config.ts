import { defineConfig } from 'vite-plus'

export default defineConfig({
  pack: {
    entry: 'src/extension.ts',
    outDir: 'dist',
    hash: false,
    fixedExtension: false,
    deps: {
      // tsdown <0.23 compatibility: resolve external dependency subpaths.
      // Remove to preserve subpath imports as written (the new default).
      // https://tsdown.dev/options/dependencies#deps-resolvedepsubpath
      resolveDepSubpath: true,
      neverBundle: ['vscode'],
    },
  },
})
