import { PropType } from 'vue'

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
    type: Function,
  },
  'onUpdate:modelValue': {
    type: Function,
  },
}
