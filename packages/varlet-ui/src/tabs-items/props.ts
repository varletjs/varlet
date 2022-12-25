import { defineListenerProp } from '../utils/components'

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
  'onUpdate:active': defineListenerProp<(active: string | number) => void>(),
}
