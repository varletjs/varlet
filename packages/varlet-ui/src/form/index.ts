import { App } from 'vue'
import Form from './Form.vue'

Form.install = function (app: App) {
  app.component(Form.name, Form)
}

export default Form
