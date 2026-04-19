import { clean, defineConfig, fmt, hook, lint, staged } from 'rattail/vite-plus'

export default defineConfig({
  lint: lint({
    ignores: ['es/**', 'lib/**', 'umd/**', 'site/**', 'coverage/**', 'highlight/**', 'types/**', 'node_modules/**'],
  }),

  fmt: fmt({
    ignores: [
      'es/**',
      'lib/**',
      'umd/**',
      'site/**',
      'coverage/**',
      'highlight/**',
      'types/**',
      '**/*.md',
      '**/package.json',
    ],
  }),

  staged: staged(),

  rattail: {
    clean: clean({
      patterns: [
        'es',
        'lib',
        'umd',
        'site',
        'coverage',
        'highlight',
        '.varlet',
        '.eslintcache',
        '**/.vite',
        '.vite-hooks',
      ],
    }),

    hook: hook(),
  },
})
