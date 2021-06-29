import type { App } from 'vue'
import Input from './Input.vue'

Input.install = function (app: App) {
  app.component(Input.name, Input)
}

export const _InputComponent = Input

export default Input
