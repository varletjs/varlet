import type { PropType } from 'vue'
import type { Placement as PopperPlacement } from '@popperjs/core'
import { TeleportProps } from 'vue'

export type NeededPopperPlacement = Exclude<PopperPlacement, 'auto' | 'auto-start' | 'auto-end'>

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
    default: 'Tooltip',
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
  defaultStyle: {
    type: Boolean,
    default: true,
  },
  onOpen: {
    type: Function as PropType<() => void>,
  },
  onOpened: {
    type: Function as PropType<() => void>,
  },
  onClose: {
    type: Function as PropType<() => void>,
  },
  onClosed: {
    type: Function as PropType<() => void>,
  },
  'onUpdate:show': {
    type: Function as PropType<(show: boolean) => void>,
  },
}
