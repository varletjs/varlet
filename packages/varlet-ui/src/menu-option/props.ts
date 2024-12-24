import { PropType } from 'vue'
import { MenuSelectOption } from '../menu-select/props'
import { defineListenerProp } from '../utils/components'

export const props = {
  label: {},
  value: {},
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: true,
  },
  // internal
  option: Object as PropType<MenuSelectOption>,
  childrenTrigger: Boolean,
  highlight: Boolean,
  onKeyboardTrigger: defineListenerProp<(trigger: 'ArrowLeft' | 'ArrowRight') => void>(),
}
