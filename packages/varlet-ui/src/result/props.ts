import type { PropType } from 'vue'

function statusValidator(status: string) {
  return ['info', 'success', 'warning', 'error'].includes(status)
}

export const props = {
  imageSize: {
    type: [String, Number],
    default: 80,
  },
  status: {
    type: String as PropType<'info' | 'success' | 'warning' | 'error'>,
    validator: statusValidator,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  duration: {
    type: [Number, String],
    default: 300,
  },
}
