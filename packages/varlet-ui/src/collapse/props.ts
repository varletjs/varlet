import type { PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type CollapseModelValue = null | string | number | Array<string | number>

export const props = {
  modelValue: {
    type: [Array, String, Number] as PropType<null | string | number | Array<string | number>>,
  },
  accordion: {
    type: Boolean,
    default: false,
  },
  offset: {
    type: Boolean,
    default: true,
  },
  onChange: defineListenerProp<(value: CollapseModelValue) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: CollapseModelValue) => void>(),
}
