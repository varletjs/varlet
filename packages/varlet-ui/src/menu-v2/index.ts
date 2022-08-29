import type { App } from 'vue'
import MenuV2 from './MenuV2.vue'

MenuV2.install = function (app: App) {
  app.component(MenuV2.name, MenuV2)
}

export const _MenuV2Component = MenuV2

export default MenuV2
