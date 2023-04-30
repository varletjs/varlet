import type { App } from 'vue'
import RadioGroup from './RadioGroup.vue'

RadioGroup.install = function (app: App) {
  app.component(RadioGroup.name, RadioGroup)
}

export { props as radioGroupProps } from './props'

export const _RadioGroupComponent = RadioGroup

export default RadioGroup
