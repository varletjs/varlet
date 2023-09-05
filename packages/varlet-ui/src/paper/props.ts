import { defineListenerProp } from '../utils/components'

export const props = {
  elevation: {
    type: [Boolean, Number, String],
    default: false,
  },
  ripple: Boolean,
  radius: [Number, String],
  width: [Number, String],
  height: [Number, String],
  round: Boolean,
  inline: Boolean,
  onClick: defineListenerProp<(e: Event) => void>(),
}
