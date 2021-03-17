import { PropType } from 'vue'

export const props = {
  name: {
    type: [String, Number],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  onClick: {
    type: Function as PropType<(active: string | number, e: Event) => void>,
  },
}
