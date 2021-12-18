import CollapseMenu from './CollapseMenu'
import type { App } from 'vue'

CollapseMenu.install = function (app: App) {
  app.component(CollapseMenu.name, CollapseMenu)
}

export const _CollapseMenuComponent = CollapseMenu

export default CollapseMenu
