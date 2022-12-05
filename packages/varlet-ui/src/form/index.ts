import Form from './Form.vue'
import { useValidation } from '../utils/components'
import { useForm } from './provide'
import type { App } from 'vue'

Form.install = function (app: App) {
  app.component(Form.name, Form)
}

Form.useValidation = useValidation

Form.useForm = useForm

export const _FormComponent = Form

export default Form
