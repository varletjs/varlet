import type { App } from 'vue'
import BackTop from './BackTop.vue'

BackTop.install = function (app: App) {
  app.component(BackTop.name, BackTop)
}

export { props as backTopProps } from './props'

export const _BackTopComponent = BackTop

export default BackTop
