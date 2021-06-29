import type { App } from 'vue'
import Form from './Form.vue'

Form.install = function (app: App) {
  app.component(Form.name, Form)
}

export const _FormComponent = Form

export default Form
