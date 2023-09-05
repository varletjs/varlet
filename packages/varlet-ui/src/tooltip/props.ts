import { defineListenerProp } from '../utils/components'
import { type PropType, type TeleportProps } from 'vue'
import type { NeededPopperPlacement } from '../menu/usePopover'
import type { PositioningStrategy } from '@popperjs/core'

export type Placement = NeededPopperPlacement

export type TooltipType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'

export type TooltipTrigger = 'click' | 'hover'

export const props = {
  type: {
    type: String as PropType<TooltipType>,
    default: 'default',
  },
  color: String,
  content: String,
  show: Boolean,
  disabled: Boolean,
  trigger: {
    type: String as PropType<TooltipTrigger>,
    default: 'hover',
  },
  reference: String,
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom',
  },
  strategy: {
    type: String as PropType<PositioningStrategy>,
    default: 'absolute',
  },
  offsetX: {
    type: [Number, String],
    default: 0,
  },
  offsetY: {
    type: [Number, String],
    default: 0,
  },
  teleport: {
    type: [String, Object, Boolean] as PropType<TeleportProps['to'] | false>,
    default: 'body',
  },
  sameWidth: Boolean,
  closeOnClickReference: Boolean,
  onOpen: defineListenerProp<() => void>(),
  onOpened: defineListenerProp<() => void>(),
  onClose: defineListenerProp<() => void>(),
  onClosed: defineListenerProp<() => void>(),
  onClickOutside: defineListenerProp<(event: Event) => void>(),
  'onUpdate:show': defineListenerProp<(show: boolean) => void>(),
}
