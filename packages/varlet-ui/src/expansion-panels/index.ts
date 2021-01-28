import { App } from 'vue'
import ExpansionPanels from './ExpansionPanels.vue'

ExpansionPanels.install = function (app: App) {
  app.component(ExpansionPanels.name, ExpansionPanels)
}

export default ExpansionPanels
