import type { BundledLanguage, BundledTheme } from 'shiki'
import { PropType } from 'vue'

export type CodeLanguage = BundledLanguage

export type CodeTheme = BundledTheme

export const props = {
  content: {
    type: String,
    default: '',
  },
  lang: {
    type: String as PropType<CodeLanguage>,
    default: 'javascript',
  },
  theme: {
    type: String as PropType<CodeTheme>,
    default: 'material-theme',
  },
}
