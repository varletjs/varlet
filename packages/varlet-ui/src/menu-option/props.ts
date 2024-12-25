import { PropType } from 'vue'
import { MenuSelectOption } from '../menu-select/props'
import { defineListenerProp } from '../utils/components'

export type MenuOptionKeyArrowX = 'ArrowLeft' | 'ArrowRight'

export const props = {
  label: {},
  value: {},
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: true,
  },
  // internal start
  option: Object as PropType<MenuSelectOption>,
  childrenTrigger: Boolean,
  highlight: Boolean,
  onKeyArrowX: defineListenerProp<(key: MenuOptionKeyArrowX) => void>(),
  // internal end
}
