import { defineListenerProp } from '../utils/components'

export const props = {
  name: {
    type: [String, Number],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  onClick: defineListenerProp<(active: string | number, e: Event) => void>(),
}
