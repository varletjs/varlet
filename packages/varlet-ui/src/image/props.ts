import type { PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

function fitValidator(fit: string) {
  return ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(fit)
}

export const props = {
  src: {
    type: String,
  },
  fit: {
    type: String as PropType<'fill' | 'contain' | 'cover' | 'none' | 'scale-down'>,
    validator: fitValidator,
    default: 'fill',
  },
  alt: {
    type: String,
  },
  title: {
    type: String,
  },
  width: {
    type: [String, Number],
  },
  height: {
    type: [String, Number],
  },
  radius: {
    type: [String, Number],
    default: 0,
  },
  loading: {
    type: String,
  },
  error: {
    type: String,
  },
  lazy: {
    type: Boolean,
    default: false,
  },
  ripple: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: true,
  },
  onClick: defineListenerProp<(e: Event) => void>(),
  onLoad: defineListenerProp<(e: Event) => void>(),
  onError: defineListenerProp<(e: Event) => void>(),
}
