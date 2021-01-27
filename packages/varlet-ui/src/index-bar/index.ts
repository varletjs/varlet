import { App } from 'vue'
import IndexBar from './IndexBar.vue'

IndexBar.install = function (app: App) {
  app.component(IndexBar.name, IndexBar)
}

export default IndexBar
