import { type PropType } from 'vue'
import { iconProps } from '../icon'
import { defineListenerProp, pickProps } from '../utils/components'

export type AlertType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'

export const props = {
  type: {
    type: String as PropType<AlertType>,
    default: 'default',
  },
  title: String,
  text: String,
  closeable: Boolean,
  elevation: {
    type: [Boolean, String, Number],
    default: false,
  },
  outline: Boolean,
  iconName: pickProps(iconProps, 'name'),
  namespace: pickProps(iconProps, 'namespace'),
  onClose: defineListenerProp<(e: Event) => void>(),
}
