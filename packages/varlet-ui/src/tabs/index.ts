import type { App } from 'vue'
import Tabs from './Tabs.vue'

Tabs.install = function (app: App) {
  app.component(Tabs.name, Tabs)
}

export { props as tabsProps } from './props'

export const _TabsComponent = Tabs

export default Tabs
