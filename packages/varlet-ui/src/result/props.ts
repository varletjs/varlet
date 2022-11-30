import type { PropType } from 'vue'

function typeValidator(type: string) {
  return ['info', 'success', 'warning', 'error', 'question', 'empty'].includes(type)
}

export type ResultType = 'info' | 'success' | 'warning' | 'error' | 'question' | 'empty'

export const props = {
  imageSize: {
    type: [String, Number],
  },
  type: {
    type: String as PropType<ResultType>,
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
