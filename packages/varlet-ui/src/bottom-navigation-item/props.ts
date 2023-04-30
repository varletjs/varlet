import type { PropType } from 'vue'
import type { BadgeProps } from '../../types'
import { defineListenerProp } from '../utils/components'

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
  onClick: defineListenerProp<(active: number | string) => void>(),
}
