// Component entry, the folder where the file exists will be exposed to the user
import ButtonGroup from './ButtonGroup.vue'
import type { App } from 'vue'

ButtonGroup.install = function (app: App) {
  app.component(ButtonGroup.name, ButtonGroup)
}

export const _ButtonGroupComponent = ButtonGroup

export default ButtonGroup
