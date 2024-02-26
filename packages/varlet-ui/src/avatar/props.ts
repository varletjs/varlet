import { defineListenerProp } from '../utils/components'
import { type PropType } from 'vue'

export type AvatarSize = 'mini' | 'small' | 'normal' | 'large' | number | string

export type AvatarFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

export const props = {
  round: {
    type: Boolean,
    default: true,
  },
  size: {
    type: [String, Number] as PropType<AvatarSize>,
    default: 'normal',
  },
  alt: String,
  color: String,
  src: String,
  fit: {
    type: String as PropType<AvatarFit>,
    default: 'cover',
  },
  bordered: Boolean,
  borderColor: String,
  loading: String,
  error: String,
  lazy: Boolean,
  hoverable: Boolean,
  onClick: defineListenerProp<(e: Event) => void>(),
  onLoad: defineListenerProp<(e: Event) => void>(),
  onError: defineListenerProp<(e: Event) => void>(),
}
