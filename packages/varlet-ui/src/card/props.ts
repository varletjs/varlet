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
    default: 'cover',
  },
  imageHeight: {
    type: [String, Number],
  },
  imageWidth: {
    type: [String, Number],
  },
  outline: {
    type: Boolean,
    default: false,
  },
  layout: {
    type: String as PropType<'row' | 'column'>,
    default: 'column',
  },
  floating: {
    type: Boolean,
    default: false,
  },
  floatingDuration: {
    type: Number,
    default: 250,
  },
  alt: {
    type: String,
  },
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  description: {
    type: String,
  },
  elevation: {
    type: [Number, String, Boolean],
    default: true,
  },
  ripple: {
    type: Boolean,
    default: false,
  },
  onClick: defineListenerProp<(e: Event) => void>(),
  'onUpdate:floating': defineListenerProp<(value: boolean) => void>(),
}
