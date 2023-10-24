import type { PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export const props = {
  visibilityHeight: {
    type: [Number, String],
    default: 200,
  },
  duration: {
    type: Number,
    default: 300,
  },
  right: [Number, String],
  elevation: {
    type: [Boolean, Number, String],
    default: true,
  },
  bottom: [Number, String],
  target: [String, Object] as PropType<string | HTMLElement>,
  onClick: defineListenerProp<(event: Event) => void>(),
}
