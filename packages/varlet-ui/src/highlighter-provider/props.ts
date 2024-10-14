import { PropType } from 'vue'

export interface CodeToHtmlOptions {
  lang: string
  theme: string
}

export interface Highlighter {
  codeToHtml: (code: string, options: CodeToHtmlOptions) => Promise<string>
}

export const props = {
  highlighter: Object as PropType<Highlighter>,
  theme: String,
  tag: {
    type: String,
    default: 'div',
  },
}
