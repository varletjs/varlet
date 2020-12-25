import { App } from 'vue'
import Icon from './Icon.vue'

Icon.install = function (app: App) {
	app.component(Icon.name, Icon)
}

export default Icon
