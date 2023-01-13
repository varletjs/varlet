import type { Plugin } from 'vite'
import fse from 'fs-extra'

const { pathExistsSync, writeFileSync, readFileSync, removeSync } = fse

export interface InlineCssOptions {
  cssFile: string
  jsFile: string
  onEnd?(): void
}

export function inlineCss(options: InlineCssOptions): Plugin {
  return {
    name: 'vite-plugin-varlet-inline-css',

    apply: 'build',

    closeBundle() {
      const { cssFile, jsFile, onEnd } = options

      if (!pathExistsSync(cssFile)) {
        this.warn('css file cannot found')
        onEnd?.()
        return
      }

      if (!pathExistsSync(jsFile)) {
        this.error('js file cannot found')
        onEnd?.()
        return
      }

      const cssCode = readFileSync(cssFile, 'utf-8')
      const jsCode = readFileSync(jsFile, 'utf-8')
      const injectCode = `;(function(){var style=document.createElement('style');style.type='text/css';\
style.rel='stylesheet';style.appendChild(document.createTextNode(\`${cssCode.replace(/\\/g, '\\\\')}\`));\
var head=document.querySelector('head');head.appendChild(style)})();`

      writeFileSync(jsFile, `${injectCode}${jsCode}`)
      removeSync(cssFile)
      onEnd?.()
    },
  }
}
