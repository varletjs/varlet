import type { App } from 'vue'
import Tab from './Tab.vue'

Tab.install = function (app: App) {
  app.component(Tab.name, Tab)
}

export { props as tabProps } from './props'

export const _TabComponent = Tab

export default Tab
