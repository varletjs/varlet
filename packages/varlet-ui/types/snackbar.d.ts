import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { LoadingType, LoadingSize } from './loading'
import { App, TeleportProps, VNode } from 'vue'

export type SnackbarPosition = 'top' | 'center' | 'bottom'

export type SnackbarType = 'success' | 'warning' | 'info' | 'error' | 'loading'

export declare const snackbarProps: Record<keyof SnackbarProps, any>

export interface SnackbarProps extends BasicAttributes {
  type?: SnackbarType
  content?: string
  position?: SnackbarPosition
  loadingType?: LoadingType
  loadingSize?: LoadingSize
  loadingColor?: string
  loadingRadius?: string | number
  teleport?: TeleportProps['to'] | false
  lockScroll?: boolean
  contentClass?: string
  duration?: number
  vertical?: boolean
  show?: boolean
  forbidClick?: boolean
  onOpen?: ListenerProp<() => void>
  onClose?: ListenerProp<() => void>
  onOpened?: ListenerProp<() => void>
  onClosed?: ListenerProp<() => void>
  'onUpdate:show'?: ListenerProp<(show: boolean) => void>
}

export class SnackbarComponent extends VarComponent {
  $props: SnackbarProps

  $slots: {
    default(): VNode[]
    icon(): VNode[]
    action(): VNode[]
  }
}

export interface SnackbarHandel {
  clear: () => void
}

export interface SnackbarOptions {
  type?: SnackbarType
  position?: SnackbarPosition
  content?: string | VNode | (() => VNode)
  icon?: string | VNode | (() => VNode)
  action?: string | VNode | (() => VNode)
  duration?: number
  contentClass?: string
  vertical?: boolean
  loadingType?: string
  loadingSize?: string
  loadingColor?: string
  loadingRadius?: string
  lockScroll?: boolean
  forbidClick?: boolean
  onOpen?: () => void
  onClose?: () => void
  onOpened?: () => void
  onClosed?: () => void
}

export interface ISnackbar {
  (options?: SnackbarOptions | string): SnackbarHandel

  Component: typeof SnackbarComponent

  install(app: App): void

  setPropsDefaults: SetPropsDefaults<SnackbarProps>

  allowMultiple(bool: boolean): void

  success(options: SnackbarOptions | string): SnackbarHandel

  warning(options: SnackbarOptions | string): SnackbarHandel

  info(options: SnackbarOptions | string): SnackbarHandel

  error(options: SnackbarOptions | string): SnackbarHandel

  loading(options: SnackbarOptions | string): SnackbarHandel

  setDefaultOptions(options: SnackbarOptions): void

  resetDefaultOptions(): void

  clear(): void
}

export declare const Snackbar: ISnackbar

export class _SnackbarComponent extends SnackbarComponent {}
