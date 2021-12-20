import type { PropType } from 'vue'

export type Status = 'open' | 'closed'

export const props = {
  status: {
    type: String as PropType<Status>,
    default: 'closed',
  },
  title: {
    type: String,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
}
