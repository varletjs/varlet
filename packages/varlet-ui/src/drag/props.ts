import { type TeleportProps, type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type DragDirection = 'x' | 'y' | 'xy'

export type DragAttraction = 'x' | 'y' | 'xy'

export interface DragBoundary {
  top?: number | string
  bottom?: number | string
  left?: number | string
  right?: number | string
}

export const props = {
  direction: {
    type: String as PropType<DragDirection>,
    default: 'xy',
  },
  attraction: String as PropType<DragAttraction>,
  disabled: Boolean,
  boundary: {
    type: Object as PropType<DragBoundary>,
    default: () => ({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }),
  },
  zIndex: {
    type: [Number, String],
    default: 90,
  },
  teleport: {
    type: [String, Object, Boolean] as PropType<TeleportProps['to'] | false>,
    default: 'body',
  },
  onClick: defineListenerProp<(event: Event) => void>(),
}
