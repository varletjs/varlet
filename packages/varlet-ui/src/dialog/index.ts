import VarDialog from './Dialog.vue'
import { isString } from '../utils/shared'
import { mountInstance } from '../utils/components'
import { reactive } from 'vue'

interface DialogOptions {
  show?: boolean
  title?: string
  message?: string
  messageAlign?: string
  confirmButton?: boolean
  cancelButton?: boolean
  confirmButtonText?: string
  cancelButtonText?: string
  confirmButtonColor?: string
  cancelButtonColor?: string
  confirmButtonBackground?: string
  cancelButtonBackground?: string
  beforeClose?: (done: () => void) => void
  overlay?: boolean
  overlayClass?: string
  lockScroll?: boolean
  closeOnClickOverlay?: boolean
}

type DialogResolveState = 'confirm' | 'cancel' | 'close'

function Dialog(options: DialogOptions | string): Promise<DialogResolveState> {
  return new Promise((resolve) => {
    const dialogOptions: DialogOptions = (isString(options) ? { message: options } : options)
    const reactiveDialogOptions: DialogOptions = reactive<DialogOptions>(dialogOptions)

    const { unmountInstance } = mountInstance(
      VarDialog,
      reactiveDialogOptions, {
      'onConfirm': () => {
        resolve('confirm')
      },
      'onCancel': () => {
        resolve('cancel')
      },
      'onClose': () => {
        resolve('close')
      },
      'onClosed': () => {
        unmountInstance()
      },
      'onUpdate:show': (value: boolean) => {
        reactiveDialogOptions.show = value
      }
    })

    reactiveDialogOptions.show = true
  })
}

Dialog.install = function(app: any) {
  app.component(VarDialog.name, VarDialog)
}

Dialog.Component = VarDialog

export default Dialog
