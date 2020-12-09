import SnackbarCore from './SnackbarCore.vue'

SnackbarCore.install = function (app: any) {
	app.component(SnackbarCore.name, SnackbarCore)
}

export default SnackbarCore
