import { PropType } from 'vue'
import { SelectOption } from '../select/props'

export const props = {
  label: {},
  value: {},
  disabled: Boolean,
  // internal
  option: Object as PropType<SelectOption>,
}
