import type { App } from 'vue'
import Swipe from './Swipe.vue'

Swipe.install = function (app: App) {
  app.component(Swipe.name, Swipe)
}

export { props as swipeProps } from './props'

export const _SwipeComponent = Swipe

export default Swipe
