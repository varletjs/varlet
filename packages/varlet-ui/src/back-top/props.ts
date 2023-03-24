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
  right: {
    type: [Number, String],
  },
  elevation: {
    type: [Boolean, Number, String],
    default: true,
  },
  bottom: {
    type: [Number, String],
  },
  target: {
    type: [String, Object] as PropType<string | HTMLElement>,
  },
  onClick: defineListenerProp<(event: MouseEvent) => void>(),
}
