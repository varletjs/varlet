import { defineListenerProp, pickProps } from '../utils/components'
import { iconProps } from '../icon'

export const props = {
  title: [Number, String],
  icon: pickProps(iconProps, 'name'),
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
