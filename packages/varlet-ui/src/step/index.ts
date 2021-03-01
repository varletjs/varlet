import { App } from 'vue'
import Step from './Step.vue'

Step.install = function (app: App) {
  app.component(Step.name, Step)
}

export default Step
