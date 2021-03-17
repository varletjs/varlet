import { PropType } from 'vue'

export const props = {
  active: {
    type: [String, Number],
    default: 0,
  },
  'onUpdate:active': {
    type: Function as PropType<(active: string | number) => void>,
  },
}
