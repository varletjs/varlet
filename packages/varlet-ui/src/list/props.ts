import { PropType } from 'vue'

export const props = {
  loading: {
    type: Boolean,
    default: false,
  },
  immediateCheck: {
    type: Boolean,
    default: true,
  },
  finished: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  offset: {
    type: [String, Number],
    default: 0,
  },
  loadingText: {
    type: String,
  },
  finishedText: {
    type: String,
  },
  errorText: {
    type: String,
  },
  onLoad: {
    type: Function as PropType<() => void>,
  },
  'onUpdate:loading': {
    type: Function as PropType<(loading: boolean) => void>,
  },
  'onUpdate:error': {
    type: Function as PropType<(error: boolean) => void>,
  },
}
