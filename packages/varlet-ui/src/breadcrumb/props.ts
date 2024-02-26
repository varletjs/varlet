import { defineListenerProp } from '../utils/components'

export const props = {
  separator: String,
  onClick: defineListenerProp<(e: Event) => void>(),
}
