import CollapseMenuGroup from './CollapseMenuGroup.tsx'
import type { App } from 'vue'

CollapseMenuGroup.install = function (app: App) {
  app.component(CollapseMenuGroup.name, CollapseMenuGroup)
}

export const _CollapseMenuGroupComponent = CollapseMenuGroup

export default CollapseMenuGroup
