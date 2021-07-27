export const props = {
  sticky: {
    type: Boolean,
    default: true,
  },
  stickyOffsetTop: {
    type: Number,
    default: 0,
  },
  hideList: {
    type: Boolean,
    default: false,
  },
  zIndex: {
    type: [Number, String],
    default: 1,
  },
  highlightColor: {
    type: String,
  },
  onClick: {
    type: Function,
  },
  onChange: {
    type: Function,
  },
}
