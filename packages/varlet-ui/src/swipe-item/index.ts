import SwipeItem from './SwipeItem.vue'
import { withInstall } from '../utils/components'

SwipeItem.install = function (app: App) {
  app.component(SwipeItem.name, SwipeItem)
}

withInstall(SwipeItem)

export const _SwipeItemComponent = SwipeItem

export default SwipeItem
