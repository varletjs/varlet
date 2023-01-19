import type { PropType } from 'vue'
import type { StyleVars } from './index'

export const props = {
  styleVars: {
    type: Object as PropType<StyleVars>,
    default: () => ({}),
  },
  tag: {
    type: String,
    default: 'div',
  },
}
