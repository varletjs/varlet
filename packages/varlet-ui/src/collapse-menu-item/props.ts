import type { PropType } from 'vue'

export const props = {
  key: {
    type: [String, Number],
    default: null,
  },
  label: {
    type: [String, Number],
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
