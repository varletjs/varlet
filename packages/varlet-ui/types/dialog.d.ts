import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'
import type { App, TeleportProps, VNode } from 'vue'

export type DialogTypeMessageAlign = 'left' | 'center' | 'right'

export interface DialogProps extends BasicAttributes {
  show?: boolean
  width?: string | number
  title?: string
  message?: string
  messageAlign?: DialogTypeMessageAlign
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
  onOpen?: ListenerProp<() => void>
  onOpened?: ListenerProp<() => void>
  onBeforeClose?: ListenerProp<(action: DialogActions, done: () => void) => void>
  onClose?: ListenerProp<() => void>
  onClosed?: ListenerProp<() => void>
  onConfirm?: ListenerProp<() => void>
  onCancel?: ListenerProp<() => void>
  onClickOverlay?: ListenerProp<() => void>
  'onUpdate:show'?: ListenerProp<(show: boolean) => void>
}

export class DialogComponent extends VarComponent {
  $props: DialogProps

  $slots: {
    default(): VNode[]
    title(): VNode[]
  }
}

export type DialogActions = 'confirm' | 'cancel' | 'close'

export interface DialogOptions {
  title?: string
  width?: string | number
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
