import type { PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type PaperSurface = 'low'

export const props = {
  elevation: {
    type: [Boolean, Number, String],
    default: false,
  },
  ripple: Boolean,
  radius: [Number, String],
  width: [Number, String],
  height: [Number, String],
  round: Boolean,
  inline: Boolean,
  surface: String as PropType<PaperSurface>,
  hoverable: Boolean,
  onClick: defineListenerProp<(e: Event) => void>(),
}
