import { defineListenerProp, pickProps } from '../utils/components'
import { props as iconProps } from '../icon/props'
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
  plain: Boolean,
  round: {
    type: Boolean,
    default: true,
  },
  block: Boolean,
  closable: Boolean,
  onClose: defineListenerProp<(e: Event) => void>(),
}
