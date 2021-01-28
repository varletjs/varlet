import { PropType } from 'vue'

export const props = {
  modelValue: {
    type: [Array, String, Number] as PropType<null | string | number | Array<string | number>>,
  },
  accordion: {
    type: Boolean,
    default: false,
  },
  onChange: {
    type: Function,
  },
  offset: {
    type: Boolean,
    default: true,
  },
  'onUpdate:modelValue': {
    type: Function,
  },
}
