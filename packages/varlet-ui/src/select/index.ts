import type { App } from 'vue'
import Select from './Select.vue'

Select.install = function (app: App) {
  app.component(Select.name, Select)
}

export { props as selectProps } from './props'

export const _SelectComponent = Select

export default Select
