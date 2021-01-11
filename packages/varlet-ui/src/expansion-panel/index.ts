import { App } from 'vue'
import ExpansionPanel from './ExpansionPanel.vue'

ExpansionPanel.install = function (app: App) {
	app.component(ExpansionPanel.name, ExpansionPanel)
}

export default ExpansionPanel
