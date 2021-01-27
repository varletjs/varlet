import { App } from 'vue'
import PullRefresh from './PullRefresh.vue'

PullRefresh.install = function (app: App) {
  app.component(PullRefresh.name, PullRefresh)
}

export default PullRefresh
