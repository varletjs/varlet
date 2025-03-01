import { nextTick, reactive, type TeleportProps } from 'vue'
import { call, inBrowser, isString } from '@varlet/shared'
import { mountInstance, withInstall, withPropsDefaultsSetter } from '../utils/components'
import VarDialog from './Dialog.vue'
import { props as dialogProps } from './props'

export interface DialogOptions {
  show?: boolean
  width?: string | number
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
  closeOnKeyEscape?: boolean
  onOpen?: () => void
  onOpened?: () => void
  onBeforeClose?: (done: () => void) => void
  onClose?: () => void
  onClosed?: () => void
  onConfirm?: () => void
  onCancel?: () => void
  onClickOverlay?: () => void
  onKeyEscape?: () => void
  // internal
  teleport?: TeleportProps['to']
}

export type DialogActions = 'confirm' | 'cancel' | 'close'

export type UserDialogOptions = DialogOptions | string

let singletonOptions: DialogOptions | null
let defaultOptions: DialogOptions = {}

function normalizeOptions(options: UserDialogOptions = {}) {
  if (isString(options)) {
    return { ...defaultOptions, message: options }
  }

  return { ...defaultOptions, ...options }
}

function Dialog(options?: UserDialogOptions): Promise<DialogActions | void> {
  if (!inBrowser()) {
    return Promise.resolve()
  }

  return new Promise((resolve) => {
    Dialog.close()

    const dialogOptions: DialogOptions = normalizeOptions(options)
    const reactiveDialogOptions: DialogOptions = reactive(dialogOptions)
    reactiveDialogOptions.teleport = 'body'
    singletonOptions = reactiveDialogOptions

    const { unmountInstance } = mountInstance(VarDialog, reactiveDialogOptions, {
      onConfirm: () => {
        call(reactiveDialogOptions.onConfirm)
        resolve('confirm')
      },
      onCancel: () => {
        call(reactiveDialogOptions.onCancel)
        resolve('cancel')
      },
      onClose: () => {
        call(reactiveDialogOptions.onClose)
        resolve('close')
      },
      onClosed: () => {
        call(reactiveDialogOptions.onClosed)
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

Dialog.setDefaultOptions = function (options: DialogOptions) {
  defaultOptions = options
}

Dialog.resetDefaultOptions = function () {
  defaultOptions = {}
}

Dialog.close = function () {
  if (singletonOptions != null) {
    const prevSingletonOptions = singletonOptions
    singletonOptions = null

    nextTick().then(() => {
      prevSingletonOptions.show = false
    })
  }
}

Dialog.Component = VarDialog
withInstall(VarDialog)
withInstall(VarDialog, Dialog)
withPropsDefaultsSetter(Dialog, dialogProps)

export { dialogProps }

export const _DialogComponent = VarDialog

export default Dialog
