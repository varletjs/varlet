import type { PropType } from 'vue'

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
  /**
   * @deprecated use imgHeight instead
   */
  height: {
    type: [String, Number],
  },
  imageHeight: {
    type: [String, Number],
  },
  imageWidth: {
    type: [String, Number],
  },
  layout: {
    type: String as PropType<'row' | 'column'>,
    default: 'column',
  },
  floating: {
    type: Boolean,
    default: false,
  },
  'onUpdate:floating': {
    type: Function as PropType<(floating: boolean) => void>,
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
    type: [Number, String],
  },
  ripple: {
    type: Boolean,
    default: false,
  },
  onClick: {
    type: Function as PropType<(e: Event) => void>,
  },
}
