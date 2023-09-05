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
      exclude: ['**/example/**', '**/__tests__/**'],
    },
    globals: true,
    experimentalVmThreads: true,
    experimentalVmWorkerMemoryLimit: Math.min((1 / cpuNum) * 2, 0.2),
  },
})
