import { defineListenerProp, pickProps } from '../utils/components'
import { iconProps } from '../icon'
import { type PropType } from 'vue'

export type ChipType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'

export type ChipSize = 'normal' | 'mini' | 'small' | 'large'

export const props = {
  type: {
    type: String as PropType<ChipType>,
    default: 'default',
  },
  size: {
    type: String as PropType<ChipSize>,
    default: 'normal',
  },
  color: String,
  textColor: String,
  iconName: pickProps(iconProps, 'name'),
  namespace: pickProps(iconProps, 'namespace'),
  plain: Boolean,
  round: {
    type: Boolean,
    default: true,
  },
  block: Boolean,
  closeable: Boolean,
  onClose: defineListenerProp<(e: Event) => void>(),
}
