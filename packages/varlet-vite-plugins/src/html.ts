import ejs from 'ejs'
import type { Plugin } from 'vite'

export interface HtmlOptions {
  data?: Record<string, string | string[] | Record<string, any>>
}

export function html(options: HtmlOptions): Plugin {
  return {
    name: 'vite-plugin-varlet-html',

    transformIndexHtml: {
      order: 'pre',

      handler(html) {
        return ejs.render(html, options.data)
      },
    },
  }
}
