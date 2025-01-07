import { iconProps } from '../icon'
import { defineListenerProp, pickProps } from '../utils/components'

export const props = {
  title: String,
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
