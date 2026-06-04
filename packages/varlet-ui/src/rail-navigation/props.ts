import { defineListenerProp } from '../utils/components'

export const props = {
  active: {
    type: [Number, String],
    default: 0,
  },
  ripple: {
    type: Boolean,
    default: false,
  },
  onChange: defineListenerProp<(active: number | string) => void>(),
  'onUpdate:active': defineListenerProp<(active: number | string) => void>(),
}
