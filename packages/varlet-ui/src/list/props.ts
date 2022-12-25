import { defineListenerProp } from '../utils/components'

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
  onLoad: defineListenerProp<() => void>(),
  'onUpdate:loading': defineListenerProp<(loading: boolean) => void>(),
  'onUpdate:error': defineListenerProp<(error: boolean) => void>(),
}
