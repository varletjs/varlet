import { App } from 'vue'
import TabItem from './TabItem.vue'

TabItem.install = function (app: App) {
  app.component(TabItem.name, TabItem)
}

export default TabItem
