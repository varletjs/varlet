import { type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type AlertType = 'info' | 'success' | 'warning' | 'danger'

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
  message: String,
  closeable: Boolean,
  elevation: {
    type: [Boolean, String, Number],
    default: false,
  },
  onClose: defineListenerProp<(e: Event) => void>(),
}
