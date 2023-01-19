import type { App } from 'vue'
import Sticky from './Sticky.vue'

Sticky.install = function (app: App) {
  app.component(Sticky.name, Sticky)
}

export { props as stickyProps } from './props'

export const _StickyComponent = Sticky

export default Sticky
