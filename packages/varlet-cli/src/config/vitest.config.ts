import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vitest/config'
import { CWD, SITE_CONFIG, VITE_RESOLVE_EXTENSIONS } from '../shared/constant'

export default defineConfig({
  resolve: {
    alias: {
      '@config': SITE_CONFIG,
    },
    extensions: VITE_RESOLVE_EXTENSIONS,
  },

  plugins: [vue(), jsx()],

  test: {
    root: CWD,
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
      exclude: ['**/example/**', '**/__tests__/**'],
    },
    globals: true,
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  },
})
