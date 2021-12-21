import CollapseMenuItem from './CollapseMenuItem'
import { App } from 'vue'

CollapseMenuItem.install = function (app: App) {
  app.component(CollapseMenuItem.name, CollapseMenuItem)
}

export const _CollapseMenuItemComponent = CollapseMenuItem

export default CollapseMenuItem
