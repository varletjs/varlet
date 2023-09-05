import { type PropType, type TeleportProps } from 'vue'
import { type Placement } from './usePopover'
import { type PositioningStrategy } from '@popperjs/core'
import { defineListenerProp } from '../utils/components'

export type MenuTrigger = 'click' | 'hover'

export const props = {
  show: Boolean,
  disabled: Boolean,
  trigger: {
    type: String as PropType<MenuTrigger>,
    default: 'click',
  },
  reference: String,
  placement: {
    type: String as PropType<Placement>,
    default: 'cover-top-start',
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
  elevation: {
    type: [Boolean, String, Number],
    default: true,
  },
  defaultStyle: {
    type: Boolean,
    default: true,
  },
  popoverClass: String,
  closeOnClickReference: Boolean,
  onOpen: defineListenerProp<() => void>(),
  onOpened: defineListenerProp<() => void>(),
  onClose: defineListenerProp<() => void>(),
  onClosed: defineListenerProp<() => void>(),
  onClickOutside: defineListenerProp<(event: Event) => void>(),
  'onUpdate:show': defineListenerProp<(show: boolean) => void>(),
}
