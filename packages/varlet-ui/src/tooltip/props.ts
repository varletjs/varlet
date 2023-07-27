import { defineListenerProp } from '../utils/components'
import type { PropType, TeleportProps } from 'vue'
import type { NeededPopperPlacement } from '../menu/usePopover'
import { PositioningStrategy } from '@popperjs/core'

export type Placement = NeededPopperPlacement

function triggerValidator(trigger: string) {
  return ['click', 'hover'].includes(trigger)
}

function placementValidator(alignment: string) {
  return [
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'right',
    'right-start',
    'right-end',
    'left',
    'left-start',
    'left-end',
  ].includes(alignment)
}

function typeValidator(type: string): boolean {
  return ['default', 'primary', 'info', 'success', 'warning', 'danger'].includes(type)
}

function strategyValidator(strategy: string) {
  return ['absolute', 'fixed'].includes(strategy)
}

export const props = {
  type: {
    type: String as PropType<'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'>,
    default: 'default',
    validator: typeValidator,
  },
  color: {
    type: String,
  },
  content: {
    type: String,
  },
  show: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  trigger: {
    type: String as PropType<'click' | 'hover'>,
    default: 'hover',
    validator: triggerValidator,
  },
  reference: {
    type: String,
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom',
    validator: placementValidator,
  },
  strategy: {
    type: String as PropType<PositioningStrategy>,
    default: 'absolute',
    validator: strategyValidator,
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
    type: [String, Object] as PropType<TeleportProps['to']>,
    default: 'body',
  },
  sameWidth: {
    type: Boolean,
    default: false,
  },
  closeOnClickReference: {
    type: Boolean,
    default: false,
  },
  onOpen: defineListenerProp<() => void>(),
  onOpened: defineListenerProp<() => void>(),
  onClose: defineListenerProp<() => void>(),
  onClosed: defineListenerProp<() => void>(),
  onClickOutside: defineListenerProp<(event: Event) => void>(),
  'onUpdate:show': defineListenerProp<(show: boolean) => void>(),
}
