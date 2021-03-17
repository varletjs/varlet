import { App } from 'vue'
import CollapseItem from './CollapseItem.vue'

CollapseItem.install = function (app: App) {
  app.component(CollapseItem.name, CollapseItem)
}

export default CollapseItem
