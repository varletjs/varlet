import { PropType } from 'vue'
import { BadgeProps } from '../../types'
import { defineListenerProp } from '../utils/components'

export const props = {
  text: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  iconColor: {
    type: String,
    default: '',
  },
  badge: {
    type: [String, Number],
    default: '',
  },
  dot: {
    type: Boolean,
  },
  badgeProps: {
    type: Object as PropType<BadgeProps>,
  },
  onClick: defineListenerProp<(e: Event) => void>(),
}
