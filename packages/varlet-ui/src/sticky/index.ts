import { App } from 'vue'
import Sticky from './Sticky.vue'

Sticky.install = function (app: App) {
	app.component(Sticky.name, Sticky)
}

export default Sticky
