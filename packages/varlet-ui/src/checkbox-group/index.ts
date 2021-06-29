import type { App } from 'vue'
import CheckboxGroup from './CheckboxGroup.vue'

CheckboxGroup.install = function (app: App) {
  app.component(CheckboxGroup.name, CheckboxGroup)
}

export const _CheckboxGroupComponent = CheckboxGroup

export default CheckboxGroup
