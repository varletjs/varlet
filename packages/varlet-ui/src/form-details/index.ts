import type { App } from 'vue'
import FormDetails from './FormDetails.vue'

FormDetails.install = function (app: App) {
  app.component(FormDetails.name, FormDetails)
}

export const _FormDetailsComponent = FormDetails

export default FormDetails
