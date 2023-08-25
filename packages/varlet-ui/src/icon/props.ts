import { defineListenerProp } from '../utils/components'

export const props = {
  name: String,
  size: [Number, String],
  color: String,
  namespace: {
    type: String,
    default: 'var-icon',
  },
  transition: {
    type: [Number, String],
    default: 0,
  },
  animationClass: String,
  onClick: defineListenerProp<(event: Event) => void>(),
}
