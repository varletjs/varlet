import type { App } from 'vue'
import RadioGroup from './RadioGroup.vue'

RadioGroup.install = function (app: App) {
  app.component(RadioGroup.name, RadioGroup)
}

export const _RadioGroupComponent = RadioGroup

export default RadioGroup
