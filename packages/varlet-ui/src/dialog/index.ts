import { reactive, App } from 'vue'
import VarDialog from './Dialog.vue'
import { isString } from '../utils/shared'
import { mountInstance } from '../utils/components'

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

type DialogResolvedState = 'confirm' | 'cancel' | 'close'

function Dialog(options: DialogOptions | string): Promise<DialogResolvedState> {
  return new Promise((resolve) => {
    const dialogOptions: DialogOptions = isString(options) ? { message: options } : options
    const reactiveDialogOptions: DialogOptions = reactive(dialogOptions)

    const { unmountInstance } = mountInstance(VarDialog, reactiveDialogOptions, {
      onConfirm: () => {
        resolve('confirm')
      },
      onCancel: () => {
        resolve('cancel')
      },
      onClose: () => {
        resolve('close')
      },
      onClosed: () => {
        unmountInstance()
      },
      'onUpdate:show': (value: boolean) => {
        reactiveDialogOptions.show = value
      },
    })

    reactiveDialogOptions.show = true
  })
}

Dialog.install = function (app: App) {
  app.component(VarDialog.name, VarDialog)
}

Dialog.Component = VarDialog

export default Dialog
