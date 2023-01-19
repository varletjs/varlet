import type { App } from 'vue'
import TabItem from './TabItem.vue'

TabItem.install = function (app: App) {
  app.component(TabItem.name, TabItem)
}

export { props as tabItemProps } from './props'

export const _TabItemComponent = TabItem

export default TabItem
