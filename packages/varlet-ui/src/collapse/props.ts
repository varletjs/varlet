import { type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type CollapseModelValue = undefined | string | number | Array<string | number | undefined>

export const props = {
  modelValue: [Array, String, Number] as PropType<CollapseModelValue>,
  accordion: Boolean,
  offset: {
    type: Boolean,
    default: true,
  },
  divider: {
    type: Boolean,
    default: true,
  },
  elevation: {
    type: [Boolean, String, Number],
    default: true,
  },
  onChange: defineListenerProp<(value: CollapseModelValue) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: CollapseModelValue) => void>(),
}
