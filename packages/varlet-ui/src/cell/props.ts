import { defineListenerProp } from '../utils/components'

export const props = {
  title: {
    type: [Number, String],
  },
  icon: {
    type: String,
  },
  description: {
    type: String,
  },
  border: {
    type: Boolean,
    default: false,
  },
  borderOffset: {
    type: [Number, String],
  },
  iconClass: {
    type: String,
  },
  titleClass: {
    type: String,
  },
  descriptionClass: {
    type: String,
  },
  extraClass: {
    type: String,
  },
  ripple: {
    type: Boolean,
    default: false,
  },
  onClick: defineListenerProp<(e: Event) => void>,
}
