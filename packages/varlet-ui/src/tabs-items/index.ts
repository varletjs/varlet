import type { App } from 'vue'
import TabsItems from './TabsItems.vue'

TabsItems.install = function (app: App) {
  app.component(TabsItems.name, TabsItems)
}

export { props as tabsItemsProps } from './props'

export const _TabsItemsComponent = TabsItems

export default TabsItems
