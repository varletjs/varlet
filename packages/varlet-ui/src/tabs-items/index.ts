import { App } from 'vue'
import TabsItems from './TabsItems.vue'

TabsItems.install = function (app: App) {
	app.component(TabsItems.name, TabsItems)
}

export default TabsItems
