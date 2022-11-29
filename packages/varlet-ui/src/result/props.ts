import type { PropType } from 'vue'

function statusValidator(status: string) {
  return ['info', 'success', 'warning', 'error', 'question', 'empty'].includes(status)
}

export const props = {
  imageSize: {
    type: [String, Number],
  },
  status: {
    type: String as PropType<'info' | 'success' | 'warning' | 'error' | 'question' | 'empty'>,
    validator: statusValidator,
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
