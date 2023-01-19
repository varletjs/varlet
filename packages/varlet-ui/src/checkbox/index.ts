import type { App } from 'vue'
import Checkbox from './Checkbox.vue'

Checkbox.install = function (app: App) {
  app.component(Checkbox.name, Checkbox)
}

export { props as checkboxProps } from './props'

export const _CheckboxComponent = Checkbox

export default Checkbox
