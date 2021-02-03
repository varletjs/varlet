import { reactive, App, nextTick } from 'vue'
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

type DialogResolvedState = 'confirm' | 'cancel' | 'close' | 'exist'
interface DialogResolvedData {
  state: DialogResolvedState
}

let singletonOptions: DialogOptions | null

function Dialog(options: DialogOptions | string): Promise<DialogResolvedData> {
  return new Promise((resolve) => {
    if (singletonOptions) {
      resolve({
        state: 'exist',
      })
      return
    }
    const dialogOptions: DialogOptions = isString(options) ? { message: options } : options
    const reactiveDialogOptions: DialogOptions = reactive(dialogOptions)

    singletonOptions = reactiveDialogOptions

    const { unmountInstance } = mountInstance(VarDialog, reactiveDialogOptions, {
      onConfirm: () => {
        resolve({ state: 'confirm' })
        singletonOptions === reactiveDialogOptions && (singletonOptions = null)
      },
      onCancel: () => {
        resolve({ state: 'cancel' })
        singletonOptions === reactiveDialogOptions && (singletonOptions = null)
      },
      onClose: () => {
        resolve({ state: 'close' })
        singletonOptions === reactiveDialogOptions && (singletonOptions = null)
      },
      onClosed: () => {
        unmountInstance()
        singletonOptions === reactiveDialogOptions && (singletonOptions = null)
      },
      onRouteChange: () => {
        unmountInstance()
        singletonOptions === reactiveDialogOptions && (singletonOptions = null)
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

Dialog.close = () => {
  if (singletonOptions) {
    const options = singletonOptions
    nextTick().then(() => {
      options.show = false
    })
    singletonOptions = null
  }
}

Dialog.Component = VarDialog

export default Dialog
