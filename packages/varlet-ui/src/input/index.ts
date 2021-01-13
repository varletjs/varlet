import { App } from 'vue'
import Input from './Input.vue'

Input.install = function(app: App) {
  app.component(Input.name, Input)
}

export default Input
