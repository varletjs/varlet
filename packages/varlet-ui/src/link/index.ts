import type { App } from 'vue'
import Link from './Link.vue'

Link.install = function (app: App) {
  app.component(Link.name, Link)
}

export const _LinkComponent = Link

export default Link
