import { PropType } from 'vue'
import { SelectOption } from '../select/props'

export const props = {
  label: {},
  value: {},
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: true,
  },
  // internal
  option: Object as PropType<SelectOption>,
}
