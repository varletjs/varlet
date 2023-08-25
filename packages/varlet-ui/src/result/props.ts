import { type PropType } from 'vue'

export type ResultType = 'info' | 'success' | 'warning' | 'error' | 'question' | 'empty'

export const props = {
  imageSize: [String, Number],
  type: {
    type: String as PropType<ResultType>,
    default: 'success',
  },
  title: String,
  description: String,
  animation: {
    type: Boolean,
    default: true,
  },
}
