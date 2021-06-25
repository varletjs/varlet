import type { App } from 'vue'
import Checkbox from './Checkbox.vue'

Checkbox.install = function (app: App) {
  app.component(Checkbox.name, Checkbox)
}

export default Checkbox
