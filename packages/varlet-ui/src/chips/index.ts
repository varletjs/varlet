import { App } from 'vue'
import Chips from './Chips.vue'

Chips.install = function (app: App) {
	app.component(Chips.name, Chips)
}

export default Chips
