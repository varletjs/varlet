import { type PropType, type TeleportProps } from 'vue'
import { defineListenerProp } from '../utils/components'

export type PopupPosition = 'top' | 'bottom' | 'right' | 'left' | 'center'

export const props = {
  show: Boolean,
  position: {
    type: String as PropType<PopupPosition>,
    default: 'center',
  },
  transition: String,
  overlay: {
    type: Boolean,
    default: true,
  },
  overlayClass: String,
  overlayStyle: Object,
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
  safeArea: Boolean,
  safeAreaTop: Boolean,
  teleport: {
    type: [String, Object, Boolean] as PropType<TeleportProps['to'] | false>,
    default: 'body',
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
