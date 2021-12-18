import type { PropType } from 'vue'

export type Status = 'open' | 'closed'

export const props = {
  status: {
    type: String as PropType<Status>,
  },
}
