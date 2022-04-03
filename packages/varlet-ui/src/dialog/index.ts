import VarDialog from './Dialog.vue'
import { reactive, nextTick } from 'vue'
import { inBrowser, isNumber, isString } from '../utils/shared'
import { mountInstance } from '../utils/components'
import type { App, TeleportProps } from 'vue'

interface DialogOptions {
  show?: boolean
  title?: string
  message?: string
  messageAlign?: string
  confirmButton?: boolean
  cancelButton?: boolean
  confirmButtonText?: string
  cancelButtonText?: string
  confirmButtonTextColor?: string
  cancelButtonTextColor?: string
  confirmButtonColor?: string
  cancelButtonColor?: string
  dialogClass?: string
  dialogStyle?: Record<string, any>
  overlay?: boolean
  overlayClass?: string
  overlayStyle?: Record<string, any>
  lockScroll?: boolean
  closeOnClickOverlay?: boolean
  onOpen?: () => void
  onOpened?: () => void
  onBeforeClose?: (done: () => void) => void
  onClose?: () => void
  onClosed?: () => void
  onConfirm?: () => void
  onCancel?: () => void
  onClickOverlay?: () => void
  // internal
  teleport?: TeleportProps['to']
}

export type DialogActions = 'confirm' | 'cancel' | 'close'

let singletonOptions: DialogOptions | null

function Dialog(options: DialogOptions | string | number): Promise<DialogActions | void> {
  if (!inBrowser()) {
    return Promise.resolve()
  }

  return new Promise((resolve) => {
    Dialog.close()

    const dialogOptions: DialogOptions = isString(options) || isNumber(options) ? { message: String(options) } : options
    const reactiveDialogOptions: DialogOptions = reactive(dialogOptions)
    reactiveDialogOptions.teleport = 'body'
    singletonOptions = reactiveDialogOptions

    const { unmountInstance } = mountInstance(VarDialog, reactiveDialogOptions, {
      onConfirm: () => {
        reactiveDialogOptions.onConfirm?.()
        resolve('confirm')
      },
      onCancel: () => {
        reactiveDialogOptions.onCancel?.()
        resolve('cancel')
      },
      onClose: () => {
        reactiveDialogOptions.onClose?.()
        resolve('close')
      },
      onClosed: () => {
        reactiveDialogOptions.onClosed?.()
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

VarDialog.install = function (app: App) {
  app.component(VarDialog.name, VarDialog)
}

Dialog.install = function (app: App) {
  app.component(VarDialog.name, VarDialog)
}

Dialog.close = () => {
  if (singletonOptions != null) {
    const prevSingletonOptions = singletonOptions
    singletonOptions = null

    nextTick().then(() => {
      prevSingletonOptions.show = false
    })
  }
}

Dialog.Component = VarDialog

export const _DialogComponent = VarDialog

export default Dialog
