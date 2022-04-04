import BottomNavigation from './BottomNavigation.vue'
import type { App } from 'vue'

BottomNavigation.install = function (app: App) {
  app.component(BottomNavigation.name, BottomNavigation)
}

export const _BottomNavigationComponent = BottomNavigation

export default BottomNavigation
