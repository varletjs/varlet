import type { App } from 'vue'
import PullRefresh from './PullRefresh.vue'

PullRefresh.install = function (app: App) {
  app.component(PullRefresh.name, PullRefresh)
}

export { props as pullRefreshProps } from './props'

export const _PullRefreshComponent = PullRefresh

export default PullRefresh
