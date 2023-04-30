import type { PropType, TeleportProps } from 'vue'
import type { Placement } from './usePopover'
import { defineListenerProp } from '../utils/components'

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
    'cover-top',
    'cover-top-start',
    'cover-top-end',
    'cover-bottom',
    'cover-bottom-start',
    'cover-bottom-end',
    'cover-left',
    'cover-right',
  ].includes(alignment)
}

export const props = {
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
    default: 'click',
    validator: triggerValidator,
  },
  reference: {
    type: String,
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'cover-top-start',
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
  sameWidth: {
    type: Boolean,
    default: false,
  },
  elevation: {
    type: [Boolean, String, Number],
    default: true,
  },
  defaultStyle: {
    type: Boolean,
    default: true,
  },
  onOpen: defineListenerProp<() => void>(),
  onOpened: defineListenerProp<() => void>(),
  onClose: defineListenerProp<() => void>(),
  onClosed: defineListenerProp<() => void>(),
  'onUpdate:show': defineListenerProp<(show: boolean) => void>(),
}
