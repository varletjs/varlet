import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'
import type { App, TeleportProps } from 'vue'

export interface DialogProps extends BasicAttributes {
  show?: boolean
  title?: string
  message?: string
  messageAlign?: 'left' | 'center' | 'right'
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
  dialogClass?: string
  dialogStyle?: Record<string, any>
  lockScroll?: boolean
  closeOnClickOverlay?: boolean
  teleport?: TeleportProps['to']
  onOpen?: () => void
  onOpened?: () => void
  onBeforeClose?: (action: DialogActions, done: () => void) => void
  onClose?: () => void
  onClosed?: () => void
  onConfirm?: () => void
  onCancel?: () => void
  onClickOverlay?: () => void
  'onUpdate:show'?: (show: boolean) => void
}

export class DialogComponent extends VarComponent {
  $props: DialogProps
}

export type DialogActions = 'confirm' | 'cancel' | 'close'

export interface DialogOptions {
  title?: string
  message?: string
  messageAlign?: 'left' | 'center' | 'right'
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
  dialogClass?: string
  dialogStyle?: Record<string, any>
  lockScroll?: boolean
  closeOnClickOverlay?: boolean
  onOpen?: () => void
  onOpened?: () => void
  onBeforeClose?: (action: DialogActions, done: () => void) => void
  onClose?: () => void
  onClosed?: () => void
  onConfirm?: () => void
  onCancel?: () => void
  onClickOverlay?: () => void
}

export interface IDialog {
  (options: DialogOptions | string): Promise<DialogActions>
  Component: typeof DialogComponent

  close(): void

  install(app: App): void
}

export const Dialog: IDialog

export class _DialogComponent extends DialogComponent {}
