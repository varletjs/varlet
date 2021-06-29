import type { App } from 'vue'
import Collapse from './Collapse.vue'

Collapse.install = function (app: App) {
  app.component(Collapse.name, Collapse)
}

export const _CollapseComponent = Collapse

export default Collapse
