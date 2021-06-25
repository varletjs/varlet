import type { App } from 'vue'
import Divider from './Divider.vue'

Divider.install = function (app: App) {
  app.component(Divider.name, Divider)
}

export default Divider
