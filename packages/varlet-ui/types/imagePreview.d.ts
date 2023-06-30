import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'
import { SwipeToOptions } from './swipe'
import { App, TeleportProps, VNode } from 'vue'

export declare const imagePreviewProps: Record<string, any>

export interface ImagePreviewProps extends BasicAttributes {
  show?: boolean
  initialIndex?: string | number
  images?: string[]
  zoom?: string | number
  lockScroll?: boolean
  indicator?: boolean
  closeable?: boolean
  teleport?: TeleportProps['to']
  imagePreventDefault?: boolean
  onOpen?: ListenerProp<() => void>
  onOpened?: ListenerProp<() => void>
  onClose?: ListenerProp<() => void>
  onClosed?: ListenerProp<() => void>
  onChange?: ListenerProp<(index: number) => void>
  onLongPress?: ListenerProp<(index: number) => void>
  'onUpdate:show'?: ListenerProp<(show: boolean) => void>

  /** @deprecated Use initialIndex to instead. */
  current?: string
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

  /** @deprecated Use initialIndex to instead. */
  current?: string
}

export class ImagePreviewComponent extends VarComponent {
  $props: ImagePreviewProps

  $slots: {
    indicator(): VNode[]
    extra(): VNode[]
    'close-icon'(): VNode[]
  }

  prev(options?: SwipeToOptions): void

  next(options?: SwipeToOptions): void

  to(index: number, options?: SwipeToOptions): void
}

export interface IImagePreview {
  (options: string | string[] | ImagePreviewOptions): void

  Component: typeof ImagePreviewComponent

  setDefaultOptions(options: ImagePreviewOptions): void

  resetDefaultOptions(): void

  close(): void

  install(app: App): void
}

export declare const ImagePreview: IImagePreview

export class _ImagePreviewComponent extends ImagePreviewComponent {}
