import { defineListenerProp } from '../utils/components'

export interface SwipeToOptions {
  event?: boolean
}

export const props = {
  loop: {
    type: Boolean,
    default: true,
  },
  autoplay: {
    type: [String, Number],
  },
  duration: {
    type: [String, Number],
    default: 300,
  },
  initialIndex: {
    type: [String, Number],
    default: 0,
  },
  indicator: {
    type: Boolean,
    default: true,
  },
  indicatorColor: {
    type: String,
  },
  vertical: {
    type: Boolean,
    default: false,
  },
  touchable: {
    type: Boolean,
    default: true,
  },
  onChange: defineListenerProp<(index: number) => void>(),
}
