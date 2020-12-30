import { App } from 'vue'
import Tabs from './Tabs.vue'

Tabs.install = function (app: App) {
	app.component(Tabs.name, Tabs)
}

export default Tabs
