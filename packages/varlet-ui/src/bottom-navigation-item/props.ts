import type { PropType } from 'vue'
import type { BadgeProps } from '../../types/badge'

export const props = {
  name: {
    type: String,
  },
  icon: {
    type: String,
  },
  label: {
    type: String,
  },
  namespace: {
    type: String,
    default: 'var-icon',
  },
  badge: {
    type: [Boolean, Object] as PropType<boolean | Partial<BadgeProps>>,
    default: false,
  },
  onClick: {
    type: Function as PropType<(active: number | string) => void>,
  },
}
