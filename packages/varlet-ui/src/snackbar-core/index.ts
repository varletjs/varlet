import { App } from 'vue'
import SnackbarCore from './SnackbarCore.vue'

SnackbarCore.install = function (app: App) {
	app.component(SnackbarCore.name, SnackbarCore)
}

export default SnackbarCore
