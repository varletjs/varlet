import { type PropType, type TeleportProps } from 'vue'
import { defineListenerProp } from '../utils/components'
import type { NeededPopperPlacement } from './usePopover'

export type Placement = NeededPopperPlacement

export type TourType = 'default' | 'primary'

export interface TourGap {
  offset: number | string
  radius: number | string
}

export const props = {
  open: Boolean,
  closeable: Boolean,
  current: {
    type: Number,
    default: 0,
  },
  type: {
    type: String as PropType<TourType>,
    default: 'default',
  },
  overlay: {
    type: Boolean,
    default: true,
  },
  arrow: {
    type: Boolean,
    default: true,
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom',
  },
  gap: {
    type: Object as PropType<TourGap>,
    default: () => ({
      offset: 6,
      radius: 2,
    }),
  },

  teleport: {
    type: [String, Object, Boolean] as PropType<TeleportProps['to'] | false>,
    default: 'body',
  },
  onClose: defineListenerProp<() => void>(),
  onFinish: defineListenerProp<() => void>(),
  onChange: defineListenerProp<(current: number) => void>(),
  'onUpdate:open': defineListenerProp<(open: boolean) => void>(),
  'onUpdate:current': defineListenerProp<(current: number) => void>(),
}
