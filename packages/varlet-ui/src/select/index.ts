import { App } from 'vue'
import Select from './Select.vue'

Select.install = function (app: App) {
	app.component(Select.name, Select)
}

export default Select
