import type { PropType } from 'vue'

export const props = {
  span: {
    type: [String, Number],
    default: 24,
  },
  offset: {
    type: [String, Number],
    default: 0,
  },
  onClick: {
    type: Function as PropType<(e: Event) => void>,
  },
}
