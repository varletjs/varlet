import type { App } from 'vue'
import FormDetails from './FormDetails.vue'

FormDetails.install = function (app: App) {
  app.component(FormDetails.name, FormDetails)
}

export default FormDetails
