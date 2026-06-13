import { type PropType } from 'vue'
import { props as buttonProps } from '../button/props'
import { popupProps } from '../popup'
import { defineListenerProp, pickProps, type ExtractPublicPropTypes } from '../utils/components'
import type { DialogActions, DialogBeforeCloseRefs } from './index'

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
  confirmButtonProps: Object as PropType<ExtractPublicPropTypes<typeof buttonProps>>,
  cancelButtonProps: Object as PropType<ExtractPublicPropTypes<typeof buttonProps>>,
  confirmButtonLoading: Boolean,
  cancelButtonLoading: Boolean,
  confirmButtonDisabled: Boolean,
  cancelButtonDisabled: Boolean,
  dialogClass: String,
  dialogStyle: Object,
  onBeforeClose: defineListenerProp<(action: DialogActions, done: () => void, refs: DialogBeforeCloseRefs) => void>(),
  onConfirm: defineListenerProp<() => void>(),
  onCancel: defineListenerProp<() => void>(),
  'onUpdate:show': defineListenerProp<(show: boolean) => void>(),
  ...pickProps(popupProps, [
    'overlay',
    'overlayClass',
    'overlayStyle',
    'lockScroll',
    'closeOnClickOverlay',
    'closeOnKeyEscape',
    'teleport',
    'onOpen',
    'onClose',
    'onOpened',
    'onClosed',
    'onClickOverlay',
    'onKeyEscape',
    // internal for function call closes the dialog
    'onRouteChange',
  ]),
}
