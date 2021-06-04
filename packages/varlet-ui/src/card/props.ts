import { PropType } from 'vue'

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
  alt: {
    type: String,
  },
  title: {
    type: [Number, String],
  },
  subtitle: {
    type: String,
  },
  desc: {
    type: String,
  },
  elevation: {
    type: [Number, String],
  },
}
