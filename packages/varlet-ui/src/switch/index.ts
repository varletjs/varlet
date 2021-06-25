import type { App } from 'vue'
import Switch from './Switch.vue'

Switch.install = function (app: App) {
  app.component(Switch.name, Switch)
}

export default Switch
