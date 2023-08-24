import { defineListenerProp, pickProps } from '../utils/components'
import { props as iconProps } from '../icon/props'

export const props = {
  type: {
    type: String,
    default: 'default',
  },
  size: {
    type: String,
    default: 'normal',
  },
  color: String,
  textColor: String,
  iconName: pickProps(iconProps, 'name'),
  plain: Boolean,
  round: {
    type: Boolean,
    default: true,
  },
  block: Boolean,
  closable: Boolean,
  onClose: defineListenerProp<(e: Event) => void>(),
}
