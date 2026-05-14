import { defineListenerProp } from '../utils/components'

export const props = {
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: true,
  },
  disabled: Boolean,
  readonly: Boolean,
  ripple: {
    type: Boolean,
    default: false,
  },
  checkmark: {
    type: Boolean,
    default: true,
  },
  onClick: defineListenerProp<(e: Event) => void>(),
}
