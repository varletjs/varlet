import type { PropType } from 'vue'

export type CollapseModelValue = undefined | string | number | Array<string | number | undefined>

export const props = {
  modelValue: {
    type: [Array, String, Number] as PropType<string | number | Array<string | number>>,
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
