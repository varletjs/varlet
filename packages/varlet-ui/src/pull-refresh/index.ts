import type { App } from 'vue'
import PullRefresh from './PullRefresh.vue'

PullRefresh.install = function (app: App) {
  app.component(PullRefresh.name, PullRefresh)
}

export const _PullRefreshComponent = PullRefresh

export default PullRefresh
