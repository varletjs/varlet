import type { PropType } from 'vue'

export type Status = 'open' | 'closed'

export const props = {
  status: {
    type: String as PropType<Status>,
    default: 'closed',
  },
  title: {
    type: [String, Number],
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  name: {
    type: [String, Number],
    default: null,
  },
  icon: {
    type: [String, Object, Function],
  },
}
