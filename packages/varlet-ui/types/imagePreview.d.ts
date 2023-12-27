import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { SwipeToOptions } from './swipe'
import { App, TeleportProps, VNode } from 'vue'

export declare const imagePreviewProps: Record<keyof ImagePreviewProps, any>

export interface ImagePreviewProps extends BasicAttributes {
  show?: boolean
  initialIndex?: string | number
  images?: string[]
  zoom?: string | number
  lockScroll?: boolean
  indicator?: boolean
  closeable?: boolean
  teleport?: TeleportProps['to'] | false
  imagePreventDefault?: boolean
  onOpen?: ListenerProp<() => void>
  onOpened?: ListenerProp<() => void>
  onClose?: ListenerProp<() => void>
  onClosed?: ListenerProp<() => void>
  onChange?: ListenerProp<(index: number) => void>
  onLongPress?: ListenerProp<(index: number) => void>
  'onUpdate:show'?: ListenerProp<(show: boolean) => void>
}

export interface ImagePreviewOptions {
  initialIndex?: string | number
  images?: string[]
  zoom?: string | number
  lockScroll?: boolean
  indicator?: boolean
  closeable?: boolean
  imagePreventDefault?: boolean
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  onChange?: (index: number) => void
  onLongPress?: (index: number) => void
}

export class ImagePreviewComponent extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<ImagePreviewProps>

  $props: ImagePreviewProps

  $slots: {
    indicator(): VNode[]
    extra(): VNode[]
    'close-icon'(): VNode[]
  }

  prev(options?: SwipeToOptions): void

  next(options?: SwipeToOptions): void

  to(index: number, options?: SwipeToOptions): void

  zoom(ratio: number): void
}

export interface IImagePreview {
  (options: string | string[] | ImagePreviewOptions): void

  Component: typeof ImagePreviewComponent

  setDefaultOptions(options: ImagePreviewOptions): void

  resetDefaultOptions(): void

  close(): void

  install(app: App): void

  setPropsDefaults: SetPropsDefaults<ImagePreviewProps>
}

export declare const ImagePreview: IImagePreview

export class _ImagePreviewComponent extends ImagePreviewComponent {}
