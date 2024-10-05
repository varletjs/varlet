import { PropType } from 'vue'

export interface CodeToHtmlOptions {
  lang?: string
  theme?: string
}

export interface Highlighter {
  codeToHtml: (code: string, options: CodeToHtmlOptions) => Promise<string>
}

export const props = {
  highlighter: {
    type: Object as PropType<Highlighter>,
    default: null,
  },
  theme: {
    type: String,
    default: 'nord',
  },
  tag: {
    type: String,
    default: 'div',
  },
}
