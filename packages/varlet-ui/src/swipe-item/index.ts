import type { App } from 'vue'
import SwipeItem from './SwipeItem.vue'

SwipeItem.install = function (app: App) {
  app.component(SwipeItem.name, SwipeItem)
}

export const _SwipeItemComponent = SwipeItem

export default SwipeItem
