export const props = {
  name: {
    type: [String, Number],
  },
  title: {
    type: String,
  },
  icon: {
    type: String,
    default: 'chevron-down',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  divider: {
    type: Boolean,
    default: true,
  },
}
