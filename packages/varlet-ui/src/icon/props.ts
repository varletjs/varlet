import { defineListenerProp } from '../utils/components'

export const props = {
  name: {
    type: String,
  },
  size: {
    type: [Number, String],
  },
  color: {
    type: String,
  },
  namespace: {
    type: String,
    default: 'var-icon',
  },
  transition: {
    type: [Number, String],
    default: 0,
  },
  animationClass: {
    type: String,
  },
  onClick: defineListenerProp<(event: Event) => void>(),
}
