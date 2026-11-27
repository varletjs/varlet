import { type PropType, type TeleportProps } from 'vue'
import { type NeededPopperPlacement } from '../menu/usePopover'
import { defineListenerProp } from '../utils/components'

export type TourPlacement = NeededPopperPlacement
export type TourTarget = string | HTMLElement | (() => HTMLElement | null | undefined)

export interface TourStep {
  target?: TourTarget
  title?: string
  description?: string
  placement?: TourPlacement
}

export const props = {
  show: Boolean,
  current: { type: Number, default: 0 },
  steps: { type: Array as PropType<TourStep[]>, default: () => [] },
  placement: { type: String as PropType<TourPlacement>, default: 'bottom' },
  width: [String, Number],
  gap: { type: Number, default: 8 },
  gapRadius: { type: Number, default: 4 },
  overlay: { type: Boolean, default: true },
  lockScroll: Boolean,
  scrollIntoView: { type: Boolean, default: true },
  allowTargetInteraction: Boolean,
  closeOnClickOverlay: Boolean,
  closeOnKeyEscape: { type: Boolean, default: true },
  showClose: { type: Boolean, default: true },
  showProgress: { type: Boolean, default: true },
  prevButtonText: String,
  nextButtonText: String,
  finishButtonText: String,
  closeButtonText: String,
  teleport: {
    type: [String, Object, Boolean] as PropType<TeleportProps['to'] | false>,
    default: 'body',
  },
  onOpen: defineListenerProp<() => void>(),
  onClose: defineListenerProp<() => void>(),
  onFinish: defineListenerProp<() => void>(),
  onChange: defineListenerProp<(current: number, previous: number) => void>(),
  onClickOverlay: defineListenerProp<(event: MouseEvent) => void>(),
  'onUpdate:show': defineListenerProp<(show: boolean) => void>(),
  'onUpdate:current': defineListenerProp<(current: number) => void>(),
}
