import { defineListenerProp } from '../utils/components'

export const props = {
  name: [String, Number],
  disabled: Boolean,
  onClick: defineListenerProp<(active: string | number, e: Event) => void>(),
}
