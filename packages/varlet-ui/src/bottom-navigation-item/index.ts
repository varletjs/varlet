import BottomNavigationItem from './BottomNavigationItem.vue'
import type { App } from 'vue'

BottomNavigationItem.install = function (app: App) {
  app.component(BottomNavigationItem.name, BottomNavigationItem)
}

export const _BottomNavigationItemComponent = BottomNavigationItem

export default BottomNavigationItem
