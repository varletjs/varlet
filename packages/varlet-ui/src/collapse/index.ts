import { App } from 'vue'
import Collapse from './Collapse.vue'

Collapse.install = function (app: App) {
  app.component(Collapse.name, Collapse)
}

export default Collapse
