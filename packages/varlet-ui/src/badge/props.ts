import { type PropType } from 'vue'
import { pickProps } from '../utils/components'
import { iconProps } from '../icon'

export type BadgeType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'

export type BadgePosition = 'right-top' | 'right-bottom' | 'left-top' | 'left-bottom'

export const props = {
  type: {
    type: String as PropType<BadgeType>,
    default: 'default',
  },
  position: {
    type: String as PropType<BadgePosition>,
    default: 'right-top',
  },
  hidden: Boolean,
  value: {
    type: [String, Number],
    default: 0,
  },
  maxValue: [String, Number],
  dot: Boolean,
  icon: pickProps(iconProps, 'name'),
  namespace: pickProps(iconProps, 'namespace'),
  color: String,
  offsetX: {
    type: [String, Number],
    default: 0,
  },
  offsetY: {
    type: [String, Number],
    default: 0,
  },
}
