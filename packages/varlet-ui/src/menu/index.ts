import type { App } from 'vue'
import Menu from './Menu.vue'

Menu.install = function (app: App) {
  app.component(Menu.name, Menu)
}

export const _MenuComponent = Menu

export default Menu
