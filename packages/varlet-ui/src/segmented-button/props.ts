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
    default: undefined,
  },
  checkmark: {
    type: Boolean,
    default: undefined,
  },
  onClick: defineListenerProp<(e: Event) => void>(),
}
