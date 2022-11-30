import type { PropType } from 'vue'

function typeValidator(type: string) {
  return ['info', 'success', 'warning', 'error', 'question', 'empty'].includes(type)
}

export const props = {
  imageSize: {
    type: [String, Number],
  },
  type: {
    type: String as PropType<'info' | 'success' | 'warning' | 'error' | 'question' | 'empty'>,
    validator: typeValidator,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  duration: {
    type: Number,
    default: 300,
  },
}
