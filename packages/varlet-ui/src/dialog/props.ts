import { pickProps } from '../utils/components'
import { props as popupProps } from '../popup/props'
import type { PropType } from 'vue'
import { DialogActions } from './index'

function messageAlignValidator(messageAlign: string): boolean {
  return ['left', 'center', 'right'].includes(messageAlign)
}

export const props = {
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
  },
  message: {
    type: String,
  },
  messageAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left',
    validator: messageAlignValidator,
  },
  confirmButton: {
    type: Boolean,
    default: true,
  },
  cancelButton: {
    type: Boolean,
    default: true,
  },
  confirmButtonText: {
    type: String,
  },
  cancelButtonText: {
    type: String,
  },
  confirmButtonTextColor: {
    type: String,
  },
  cancelButtonTextColor: {
    type: String,
  },
  confirmButtonColor: {
    type: String,
  },
  cancelButtonColor: {
    type: String,
  },
  onBeforeClose: {
    type: Function as PropType<(action: DialogActions, done: () => void) => void>,
  },
  onConfirm: {
    type: Function as PropType<() => void>,
  },
  onCancel: {
    type: Function as PropType<() => void>,
  },
  'onUpdate:show': {
    type: Function as PropType<(show: boolean) => void>,
  },
  dialogClass: {
    type: String,
  },
  dialogStyle: {
    type: Object,
  },
  dialogWidth: {
    type: [Number, String],
  },
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
