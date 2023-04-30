import type { App } from 'vue'
import Link from './Link.vue'

Link.install = function (app: App) {
  app.component(Link.name, Link)
}

export { props as linkProps } from './props'

export const _LinkComponent = Link

export default Link
