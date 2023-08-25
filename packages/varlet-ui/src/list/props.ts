import { defineListenerProp } from '../utils/components'

export const props = {
  loading: Boolean,
  immediateCheck: {
    type: Boolean,
    default: true,
  },
  finished: Boolean,
  error: Boolean,
  offset: {
    type: [String, Number],
    default: 0,
  },
  loadingText: String,
  finishedText: String,
  errorText: String,
  onLoad: defineListenerProp<() => void>(),
  'onUpdate:loading': defineListenerProp<(loading: boolean) => void>(),
  'onUpdate:error': defineListenerProp<(error: boolean) => void>(),
}
