import { defineListenerProp } from '../utils/components'

export const props = {
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: undefined,
  },
  disabled: Boolean,
  readonly: Boolean,
  ripple: {
    type: Boolean,
    default: true,
  },
  onClick: defineListenerProp<(e: Event) => void>(),
}
