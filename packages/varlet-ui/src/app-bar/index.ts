import { App } from 'vue'
import AppBar from './AppBar.vue'

AppBar.install = function (app: App) {
  app.component(AppBar.name, AppBar)
}

export default AppBar
