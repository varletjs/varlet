import { App, Component } from 'vue'
import { VarComponent } from './varComponent'

export class DialogComponent extends VarComponent {
  static Component: Component
}

export type DialogActions = 'confirm' | 'cancel' | 'close'

export interface DialogOptions {
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
}

export interface IDialog {
  (options: DialogOptions | string): Promise<DialogActions>
  install(app: App): void
  close(): void
  Component: DialogComponent
}

export const Dialog: IDialog
