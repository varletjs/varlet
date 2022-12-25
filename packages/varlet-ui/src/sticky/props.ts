import { defineListenerProp } from '../utils/components'

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
  disabled: {
    type: Boolean,
    default: false,
  },
  onScroll: defineListenerProp<(offsetTop: number, isFixed: boolean) => void>(),
}
