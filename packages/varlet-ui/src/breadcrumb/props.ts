import { PropType } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export const props = {
  separator: {
    type: String,
  },
  to: {
    type: [String, Object] as PropType<RouteLocationRaw>,
    default: '',
  },
}
