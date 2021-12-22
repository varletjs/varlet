export const props = {
  name: {
    type: [String, Number],
    default: null,
  },
  label: {
    type: [String, Number, Function],
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  indent: {
    type: [String, Number],
    default: 0,
  },
  icon: {
    type: [String, Object, Function],
  },
}
