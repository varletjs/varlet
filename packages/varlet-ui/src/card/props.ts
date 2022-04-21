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
  height: {
    type: [String, Number],
  },
  width: {
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
