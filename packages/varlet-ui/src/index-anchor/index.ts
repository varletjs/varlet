import { App } from 'vue'
import IndexAnchor from './IndexAnchor.vue'

IndexAnchor.install = function (app: App) {
	app.component(IndexAnchor.name, IndexAnchor)
}

export default IndexAnchor
