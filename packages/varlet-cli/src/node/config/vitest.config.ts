import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vitest/config'
import { VITE_RESOLVE_EXTENSIONS } from '../shared/constant.js'
import { cpus } from 'os'

const cpuNum = Math.max(cpus().length - 1, 1)

export default defineConfig({
  resolve: {
    extensions: VITE_RESOLVE_EXTENSIONS,
  },

  plugins: [vue(), jsx()],

  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
      exclude: [
        '**/*.d.ts',
        '**/*.md',
        '**/example/**',
        '**/__tests__/**',
        'node_modules/**',
        '.varlet/**',
        'es/**',
        'lib/**',
        'site/**',
        'umd/**',
        'docs/**',
        'coverage/**',
        'types/**',
        'shims/**',
        'varlet.config.mjs',
      ],
    },
    globals: true,
    poolOptions: {
      vmThreads: {
        memoryLimit: Math.min((1 / cpuNum) * 2, 0.2),
      },
    },
  },
})
