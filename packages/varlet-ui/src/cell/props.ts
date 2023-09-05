import { defineListenerProp } from '../utils/components'

export const props = {
  title: [Number, String],
  icon: String,
  description: String,
  border: Boolean,
  borderOffset: [Number, String],
  iconClass: String,
  titleClass: String,
  descriptionClass: String,
  extraClass: String,
  ripple: Boolean,
  onClick: defineListenerProp<(e: Event) => void>(),
}
