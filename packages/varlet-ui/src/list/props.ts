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
    type: Number,
    default: 0,
  },
  loadingText: {
    type: String,
    default: '正在加载',
  },
  finishedText: {
    type: String,
  },
  errorText: {
    type: String,
  },
  onLoad: {
    type: Function,
  },
  'onUpdate:loading': {
    type: Function,
  },
  'onUpdate:error': {
    type: Function,
  },
}
