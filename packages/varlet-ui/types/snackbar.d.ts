import type { App } from 'vue'
import { VarComponent } from './varComponent'

export class SnackbarComponent extends VarComponent {}

export type SnackbarType = 'success' | 'warning' | 'info' | 'error' | 'loading'

export interface SnackbarHandel {
  clear: () => void
}

export interface SnackbarOptions {
  type?: SnackbarType
  content?: string
  position?: 'top' | 'center' | 'bottom'
  loadingType?: string
  loadingSize?: string
  teleport?: string
  lockScroll?: boolean
  contentClass?: string
  duration?: number
  vertical?: boolean
  show?: boolean
  forbidClick?: boolean
  onOpen?: () => void
  onClose?: () => void
  onOpened?: () => void
  onClosed?: () => void
}

export interface ISnackbar {
  (options: SnackbarOptions | string): SnackbarHandel

  Component: typeof SnackbarComponent

  install(app: App): void

  allowMultiple(bool: boolean): void

  success(any): SnackbarHandel

  warning(any): SnackbarHandel

  info(any): SnackbarHandel

  error(any): SnackbarHandel

  loading(any): SnackbarHandel

  clear(): void
}

export const Snackbar: ISnackbar
