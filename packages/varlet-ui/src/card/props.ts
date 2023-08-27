import type { PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type CardFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

export type CardLayout = 'row' | 'column'

export const props = {
  src: String,
  fit: {
    type: String as PropType<CardFit>,
    default: 'cover',
  },
  imageHeight: [String, Number],
  imageWidth: [String, Number],
  outline: Boolean,
  layout: {
    type: String as PropType<CardLayout>,
    default: 'column',
  },
  floating: Boolean,
  floatingDuration: {
    type: Number,
    default: 250,
  },
  alt: String,
  title: String,
  subtitle: String,
  description: String,
  elevation: {
    type: [Boolean, Number, String],
    default: true,
  },
  ripple: Boolean,
  onClick: defineListenerProp<(e: Event) => void>(),
  'onUpdate:floating': defineListenerProp<(value: boolean) => void>(),
}
