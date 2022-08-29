import { VarComponent, BasicAttributes, Size as LoadingSize } from './varComponent'
import { LoadingType } from './loading'
import { App, TeleportProps } from 'vue'

export type SnackbarPosition = 'top' | 'center' | 'bottom'

export type SnackbarType = 'success' | 'warning' | 'info' | 'error' | 'loading'

export interface SnackbarProps extends BasicAttributes {
  type?: SnackbarType
  content?: string
  position?: SnackbarPosition
  loadingType?: LoadingType
  loadingSize?: LoadingSize
  loadingColor?: string
  loadingRadius?: string | number
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

export interface SnackbarHandel {
  clear: () => void
}

export interface SnackbarOptions {
  type?: SnackbarType
  content?: string
  position?: SnackbarPosition
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
