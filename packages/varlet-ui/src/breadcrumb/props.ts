import { defineListenerProp } from '../utils/components'

export const props = {
  separator: {
    type: String,
  },
  onClick: defineListenerProp<(e: Event) => void>(),
}
