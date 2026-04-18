import { clean, defineConfig, fmt, hook, lint, staged } from 'rattail/vite-plus'

/** 各包构建产物目录（无 `/**`）；供 `clean` 与 lint/fmt 的 ignore 推导共用 */
const packageBuildTrees = [
  'packages/varlet-cli/lib',
  'packages/varlet-cli/site',
  'packages/varlet-vite-plugins/lib',
  'packages/varlet-vscode-extension/dist',
  'packages/varlet-ui/lib',
  'packages/varlet-ui/es',
  'packages/varlet-ui/umd',
  'packages/varlet-ui/site',
  'packages/varlet-ui/highlight',
  'packages/varlet-ui/.varlet',
  'packages/varlet-ui-playground/site',
  'packages/varlet-shared/lib',
  'packages/varlet-use/lib',
  'packages/varlet-import-resolver/lib',
  'packages/varlet-preset-tailwindcss/lib',
  'packages/varlet-preset-unocss/lib',
] as const

const cliClientLeafFiles = ['packages/varlet-cli/client.js', 'packages/varlet-cli/client.d.ts'] as const

/** 仅给 lint/fmt ignore（与原先一致）；完整产物见 `touchEmulatorBundles` */
const touchEmulatorIife = 'packages/varlet-touch-emulator/iife.js' as const

const touchEmulatorBundles = [
  touchEmulatorIife,
  'packages/varlet-touch-emulator/index.iife.js',
  'packages/varlet-touch-emulator/index.global.js',
] as const

const playgroundPublicCopies = [
  'packages/varlet-ui-playground/public/varlet.esm.js',
  'packages/varlet-ui-playground/public/varlet-touch-emulator.js',
  'packages/varlet-ui-playground/public/varlet.css',
  'packages/varlet-ui-playground/public/varlet-area.js',
] as const

const templateGeneratorOutputs = [
  'packages/varlet-cli/template/generators/**/es',
  'packages/varlet-cli/template/generators/**/umd',
  'packages/varlet-cli/template/generators/**/lib',
  'packages/varlet-cli/template/generators/**/highlight',
  'packages/varlet-cli/template/generators/**/coverage',
] as const

const treeGlob = (dir: string) => `${dir}/**`

const lintIgnores = [
  ...packageBuildTrees.map(treeGlob),
  ...cliClientLeafFiles,
  'packages/varlet-cli/template/**',
  'packages/varlet-ui/public/**',
  'packages/varlet-ui/coverage/**',
  'packages/varlet-ui/types/index.d.ts',
  'packages/varlet-ui/types/styleVars.d.ts',
  'packages/varlet-ui/src/*/__tests__/__snapshots__/*',
  'packages/varlet-ui-playground/public/**',
  touchEmulatorIife,
]

const fmtIgnores = [
  ...packageBuildTrees.map(treeGlob),
  ...cliClientLeafFiles,
  'packages/varlet-cli/client/**',
  'packages/varlet-icons/dist/**',
  'packages/varlet-ui/types/index.d.ts',
  'packages/varlet-ui/types/styleVars.d.ts',
  'packages/varlet-ui-playground/public/**',
  'packages/varlet-ui-playground/*.d.ts',
  touchEmulatorIife,
  '**/*.md',
  '.github/**',
  '.history/**',
  'pnpm-lock.yaml',
  'pnpm-workspace.yaml',
  '**/package.json',
]

const cleanPatterns = [
  ...packageBuildTrees,
  ...cliClientLeafFiles,
  'packages/varlet-ui/public/icons',
  ...playgroundPublicCopies,
  ...touchEmulatorBundles,
  ...templateGeneratorOutputs,
  '*.vsix',
]

export default defineConfig({
  lint: lint({
    rules: {
      'unicorn/prefer-string-starts-ends-with': 'off',
      'unicorn/no-useless-fallback-in-spread': 'off',
      'import/default': 'off',
    },
    ignores: lintIgnores,
  }),

  fmt: fmt({
    ignores: fmtIgnores,
  }),

  staged: staged(),

  rattail: {
    clean: clean({
      patterns: cleanPatterns,
    }),

    hook: hook(),
  },
})
