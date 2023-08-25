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
  loop: Boolean,
  'onUpdate:active': defineListenerProp<(active: string | number) => void>(),
}
