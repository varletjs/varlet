export const props = {
  sticky: {
    type: Boolean,
    default: true,
  },
  stickyOffsetTop: {
    type: Number,
    default: 0,
  },
  cssMode: {
    type: Boolean,
    default: false,
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
  duration: {
    type: [Number, String],
    default: 0,
  },
  onClick: {
    type: Function,
  },
  onChange: {
    type: Function,
  },
}
