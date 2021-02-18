import { App } from 'vue'
import BackTop from './BackTop.vue'

BackTop.install = function (app: App) {
  app.component(BackTop.name, BackTop)
}

export default BackTop
