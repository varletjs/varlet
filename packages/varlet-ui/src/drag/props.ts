import { type TeleportProps, type PropType } from 'vue'

export type DragDirection = 'x' | 'y' | 'xy'

export type DragAttraction = 'x' | 'y' | 'xy' | 'none'

export interface DragBoundary {
  top?: number | string
  bottom?: number | string
  left?: number | string
  right?: number | string
}

export const props = {
  fixed: {
    type: Boolean,
    default: true,
  },
  zIndex: {
    type: [Number, String],
    default: 90,
  },
  direction: {
    type: String as PropType<DragDirection>,
    default: 'xy',
  },
  attraction: {
    type: String as PropType<DragAttraction>,
    default: 'xy',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  boundary: {
    type: Object as PropType<DragBoundary>,
    default: () => ({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }),
  },
  teleport: {
    type: String as PropType<TeleportProps['to']>,
    default: 'body',
  },
}
