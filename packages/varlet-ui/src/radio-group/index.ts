import { App } from 'vue'
import RadioGroup from './RadioGroup.vue'

RadioGroup.install = function (app: App) {
  app.component(RadioGroup.name, RadioGroup)
}

export default RadioGroup
