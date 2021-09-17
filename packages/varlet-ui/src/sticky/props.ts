import type { PropType } from 'vue'

export const props = {
  offsetTop: {
    type: [String, Number],
    default: 0,
  },
  zIndex: {
    type: [String, Number],
    default: 10,
  },
  cssMode: {
    type: Boolean,
    default: false,
  },
  onScroll: {
    type: Function as PropType<(offsetTop: number, isFixed: boolean) => void>,
  },
}
