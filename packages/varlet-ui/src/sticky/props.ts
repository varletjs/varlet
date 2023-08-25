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
  cssMode: Boolean,
  disabled: Boolean,
  onScroll: defineListenerProp<(offsetTop: number, isFixed: boolean) => void>(),
}
