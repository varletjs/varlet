import type { App } from 'vue'
import IndexBar from './IndexBar.vue'

IndexBar.install = function (app: App) {
  app.component(IndexBar.name, IndexBar)
}

export const _IndexBarComponent = IndexBar

export default IndexBar
