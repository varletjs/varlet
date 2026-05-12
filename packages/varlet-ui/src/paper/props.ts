import type { PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type PaperSurface = 'low'

export interface PaperRipple {
  disabled?: boolean
  color?: string
}

export interface PaperHoverable {
  disabled?: boolean
  color?: string
}

export const props = {
  elevation: {
    type: [Boolean, Number, String],
    default: false,
  },
  ripple: {
    type: [Boolean, Object] as PropType<boolean | PaperRipple>,
    default: false,
  },
  radius: [Number, String],
  width: [Number, String],
  height: [Number, String],
  round: Boolean,
  inline: Boolean,
  surface: String as PropType<PaperSurface>,
  hoverable: {
    type: [Boolean, Object] as PropType<boolean | PaperHoverable>,
    default: false,
  },
  onClick: defineListenerProp<(e: Event) => void>(),
}
