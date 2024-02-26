import type { App } from 'vue'
import CodeExample from './CodeExample.vue'

CodeExample.install = function (app: App) {
  app.component(CodeExample.name, CodeExample)
}

export const _CodeExampleComponent = CodeExample

export default CodeExample
