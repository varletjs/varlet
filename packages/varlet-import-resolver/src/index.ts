import { kebabCase } from '@varlet/shared'

export interface VarletImportResolverOptions {
  /**
   * compatible with unplugin-auto-import
   *
   * @default false
   */
  autoImport?: boolean

  /**
   * whether to import style
   *
   * @default true
   */
  importStyle?: boolean

  /**
   * auto import for directives
   *
   * @default true
   */
  directives?: boolean
}

const varFunctions = [
  'ImagePreview',
  'Snackbar',
  'Picker',
  'ActionSheet',
  'Dialog',
  'Locale',
  'StyleProvider',
  'LoadingBar',
]

const varDirectives = ['Ripple', 'Lazy', 'Hover']

export function getResolved(name: string, options: VarletImportResolverOptions) {
  const { importStyle = true, autoImport = false } = options

  const sideEffects = []

  if (importStyle) {
    sideEffects.push(`@varlet/ui/es/${kebabCase(name)}/style/index.mjs`)
  }

  return {
    from: '@varlet/ui',
    name: autoImport ? name : `_${name}Component`,
    sideEffects,
  }
}

export function VarletImportResolver(options: VarletImportResolverOptions = {}) {
  return [
    {
      type: 'component' as const,
      resolve: (name: string) => {
        const { autoImport = false } = options

        if (autoImport && varFunctions.includes(name)) {
          return getResolved(name, options)
        }

        if (name.startsWith('Var')) {
          return getResolved(name.slice(3), options)
        }
      },
    },
    {
      type: 'directive' as const,
      resolve: (name: string) => {
        const { directives = true } = options

        if (!directives) {
          return
        }

        if (!varDirectives.includes(name)) {
          return
        }

        return getResolved(name, options)
      },
    },
  ]
}
