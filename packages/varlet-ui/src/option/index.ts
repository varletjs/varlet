import type { App } from 'vue'
import Option from './Option.vue'

Option.install = function (app: App) {
  app.component(Option.name, Option)
}

export const _OptionComponent = Option

export default Option
