import { defineListenerProp } from '../utils/components'
import { ScrollData } from './Sticky.vue'

export type HandleScroll = (offsetTop: number, isFixed: boolean, scrollData: ScrollData) => void

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
  onScroll: defineListenerProp<HandleScroll>(),
}
