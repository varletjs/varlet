import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'
import type { App, TeleportProps } from 'vue'

export type LoadingType = 'circle' | 'wave' | 'cube' | 'rect' | 'disappear'

export type LoadingSize = 'normal' | 'mini' | 'small' | 'large'

export interface SnackbarProps extends BasicAttributes {
  type?: SnackbarType
  content?: string
  position?: 'top' | 'center' | 'bottom'
  loadingType?: LoadingType
  loadingSize?: LoadingSize
  teleport?: TeleportProps['to']
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
  'onUpdate:show'?: (show: boolean) => void
}

export class SnackbarComponent extends VarComponent {
  $props: SnackbarProps
}

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

  success(options: SnackbarOptions | string): SnackbarHandel

  warning(options: SnackbarOptions | string): SnackbarHandel

  info(options: SnackbarOptions | string): SnackbarHandel

  error(options: SnackbarOptions | string): SnackbarHandel

  loading(options: SnackbarOptions | string): SnackbarHandel

  clear(): void
}

export const Snackbar: ISnackbar

export class _SnackbarComponent extends SnackbarComponent {}
