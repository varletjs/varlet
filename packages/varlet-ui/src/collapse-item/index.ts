import type { App } from 'vue'
import CollapseItem from './CollapseItem.vue'

CollapseItem.install = function (app: App) {
  app.component(CollapseItem.name, CollapseItem)
}

export const _CollapseItemComponent = CollapseItem

export default CollapseItem
