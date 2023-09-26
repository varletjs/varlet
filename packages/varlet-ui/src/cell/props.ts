import { defineListenerProp, pickProps } from '../utils/components'
import { props as iconProps } from '../icon/props'

export const props = {
  title: [Number, String],
  icon: String,
  namespace: pickProps(iconProps, 'namespace'),
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
