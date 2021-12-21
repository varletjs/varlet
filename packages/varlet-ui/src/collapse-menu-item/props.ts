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
  icon: {
    type: [String, Object, Function],
  },
}
