export const props = {
  sticky: {
    type: Boolean,
    default: true,
  },
  stickyOffsetTop: {
    type: Number,
    default: 0,
  },
  zIndex: {
    type: [Number, String],
    default: 1,
  },
  highlightColor: {
    type: String,
  },
  'onUpdate:active': {
    type: Function,
  },
  onClick: {
    type: Function,
  },
  onChange: {
    type: Function,
  },
}
