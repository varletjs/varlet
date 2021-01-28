import { App } from 'vue'
import SwipeItem from './SwipeItem.vue'

SwipeItem.install = function (app: App) {
	app.component(SwipeItem.name, SwipeItem)
}

export default SwipeItem
