import { PropType } from 'vue'
import { MenuSelectOption } from '../menu-select/props'

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
}
