import type { App } from 'vue'
import Switch from './Switch.vue'

Switch.install = function (app: App) {
  app.component(Switch.name, Switch)
}

export { props as switchProps } from './props'

export const _SwitchComponent = Switch

export default Switch
