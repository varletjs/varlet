import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vitest/config'
import { SITE_CONFIG, VITE_RESOLVE_EXTENSIONS } from '../shared/constant'

export default defineConfig({
  resolve: {
    alias: {
      '@config': SITE_CONFIG,
    },
    extensions: VITE_RESOLVE_EXTENSIONS,
  },

  plugins: [vue(), jsx()],

  optimizeDeps: {
    disabled: true,
  },

  test: {
    clearMocks: true,
    environment: 'jsdom',
    coverage: {
      exclude: ['**/example/**', '**/__tests__/**', 'node_modules/**'],
    },
    globals: true,
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  },
})
