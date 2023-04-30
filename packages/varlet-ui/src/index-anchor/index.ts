import type { App } from 'vue'
import IndexAnchor from './IndexAnchor.vue'

IndexAnchor.install = function (app: App) {
  app.component(IndexAnchor.name, IndexAnchor)
}

export { props as indexAnchorProps } from './props'

export const _IndexAnchorComponent = IndexAnchor

export default IndexAnchor
