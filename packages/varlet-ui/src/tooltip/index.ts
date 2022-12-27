import type { App } from 'vue'
import Tooltip from './Tooltip.vue'

Tooltip.install = function (app: App) {
  app.component(Tooltip.name, Tooltip)
}

export const _TooltipComponent = Tooltip

export default Tooltip
