import { defineListenerProp } from '../utils/components'
import type { PropType, TeleportProps } from 'vue'
import type { NeededPopperPlacement } from '../menu/usePopover'

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
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom',
    validator: placementValidator,
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
  onOpen: defineListenerProp<() => void>(),
  onOpened: defineListenerProp<() => void>(),
  onClose: defineListenerProp<() => void>(),
  onClosed: defineListenerProp<() => void>(),
  'onUpdate:show': defineListenerProp<(show: boolean) => void>(),
}
