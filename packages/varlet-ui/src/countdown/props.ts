export const props = {
  time: {
    type: [String, Number],
    default: 0,
  },
  format: {
    type: String,
    default: 'HH : mm : ss',
  },
  autoStart: {
    type: Boolean,
    default: true,
  },
  onEnd: {
    type: Function,
  },
  onChange: {
    type: Function,
  },
}
