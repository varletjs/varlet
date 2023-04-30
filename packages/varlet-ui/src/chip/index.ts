import type { App } from 'vue'
import Chip from './Chip.vue'

Chip.install = function (app: App) {
  app.component(Chip.name, Chip)
}

export { props as chipProps } from './props'

export const _ChipComponent = Chip

export default Chip
