import { type PropType } from 'vue'
import { iconProps } from '../icon'
import { defineListenerProp, pickProps } from '../utils/components'

export type AlertType = 'info' | 'success' | 'warning' | 'error'

export type AlertVariant = 'tonal' | 'outlined' | 'standard'

export const props = {
  type: {
    type: String as PropType<AlertType>,
    default: 'info',
  },
  variant: {
    type: String as PropType<AlertVariant>,
    default: 'standard',
  },
  color: String,
  title: String,
  text: String,
  closeable: Boolean,
  elevation: {
    type: [Boolean, String, Number],
    default: false,
  },
  iconName: pickProps(iconProps, 'name'),
  namespace: pickProps(iconProps, 'namespace'),
  onClose: defineListenerProp<(e: Event) => void>(),
}
