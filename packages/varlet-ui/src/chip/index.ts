import { App } from 'vue'
import Chip from './Chip.vue'

Chip.install = function (app: App) {
	app.component(Chip.name, Chip)
}

export default Chip
