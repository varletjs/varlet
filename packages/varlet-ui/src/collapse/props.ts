import type { PropType } from 'vue'

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
  onChange: {
    type: Function as PropType<(value: CollapseModelValue) => void>,
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: CollapseModelValue) => void>,
  },
}
