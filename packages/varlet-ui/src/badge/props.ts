import { type PropType } from 'vue'

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
  icon: String,
  color: String,
}
