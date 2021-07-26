import type { PropType } from 'vue'

export const props = {
  active: {
    type: [String, Number],
    default: 0,
  },
  canSwipe: {
    type: Boolean,
    default: true,
  },
  loop: {
    type: Boolean,
    default: false,
  },
  'onUpdate:active': {
    type: Function as PropType<(active: string | number) => void>,
  },
}
