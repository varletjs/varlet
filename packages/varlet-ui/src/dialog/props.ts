import { type PropType } from 'vue'
import { defineListenerProp, pickProps } from '../utils/components'
import { popupProps } from '../popup'
import { DialogActions } from './index'

export type DialogMessageAlign = 'left' | 'center' | 'right'

export const props = {
  show: Boolean,
  width: [Number, String],
  title: String,
  message: String,
  messageAlign: {
    type: String as PropType<DialogMessageAlign>,
    default: 'left',
  },
  confirmButton: {
    type: Boolean,
    default: true,
  },
  cancelButton: {
    type: Boolean,
    default: true,
  },
  confirmButtonText: String,
  cancelButtonText: String,
  confirmButtonTextColor: String,
  cancelButtonTextColor: String,
  confirmButtonColor: String,
  cancelButtonColor: String,
  dialogClass: String,
  dialogStyle: Object,
  onBeforeClose: defineListenerProp<(action: DialogActions, done: () => void) => void>(),
  onConfirm: defineListenerProp<() => void>(),
  onCancel: defineListenerProp<() => void>(),
  'onUpdate:show': defineListenerProp<(show: boolean) => void>(),
  ...pickProps(popupProps, [
    'overlay',
    'overlayClass',
    'overlayStyle',
    'lockScroll',
    'closeOnClickOverlay',
    'teleport',
    'onOpen',
    'onClose',
    'onOpened',
    'onClosed',
    'onClickOverlay',
    // internal for function call closes the dialog
    'onRouteChange',
  ]),
}
