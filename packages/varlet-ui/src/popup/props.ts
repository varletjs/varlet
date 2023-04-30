import type { PropType, TeleportProps } from 'vue'
import { defineListenerProp } from '../utils/components'

function positionValidator(position: string): boolean {
  return ['top', 'bottom', 'right', 'left', 'center'].includes(position)
}

export const props = {
  show: {
    type: Boolean,
    default: false,
  },
  position: {
    type: String as PropType<'top' | 'bottom' | 'right' | 'left' | 'center'>,
    default: 'center',
    validator: positionValidator,
  },
  transition: {
    type: String,
  },
  overlay: {
    type: Boolean,
    default: true,
  },
  overlayClass: {
    type: String,
  },
  overlayStyle: {
    type: Object,
  },
  lockScroll: {
    type: Boolean,
    default: true,
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true,
  },
  defaultStyle: {
    type: Boolean,
    default: true,
  },
  teleport: {
    type: String as PropType<TeleportProps['to']>,
  },
  onOpen: defineListenerProp<() => void>(),
  onOpened: defineListenerProp<() => void>(),
  onClose: defineListenerProp<() => void>(),
  onClosed: defineListenerProp<() => void>(),
  onClickOverlay: defineListenerProp<() => void>(),
  'onUpdate:show': defineListenerProp<(show: boolean) => void>(),
  // internal for Dialog
  onRouteChange: defineListenerProp<() => void>(),
}
