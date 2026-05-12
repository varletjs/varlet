import type { PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type CardFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

export type CardLayout = 'row' | 'column'

export type CardVariant = 'standard' | 'outlined' | 'filled'

export type CardSurface = 'low'

export interface CardRipple {
  disabled?: boolean
  color?: string
}

export interface CardHoverable {
  disabled?: boolean
  color?: string
}

export const props = {
  src: String,
  fit: {
    type: String as PropType<CardFit>,
    default: 'cover',
  },
  imageHeight: [String, Number],
  imageWidth: [String, Number],
  variant: {
    type: String as PropType<CardVariant>,
    default: 'standard',
  },
  layout: {
    type: String as PropType<CardLayout>,
    default: 'column',
  },
  surface: String as PropType<CardSurface>,
  hoverable: {
    type: [Boolean, Object] as PropType<boolean | CardHoverable>,
    default: false,
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
  ripple: {
    type: [Boolean, Object] as PropType<boolean | CardRipple>,
    default: false,
  },
  onClick: defineListenerProp<(e: Event) => void>(),
  'onUpdate:floating': defineListenerProp<(value: boolean) => void>(),

  /**
   * @deprecated use outlined variant instead
   */
  outline: Boolean,
}
