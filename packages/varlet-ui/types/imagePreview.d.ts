import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'
import { App, TeleportProps, VNode } from 'vue'

export declare const imagePreviewProps: Record<string, any>

export interface ImagePreviewProps extends BasicAttributes {
  show?: boolean
  current?: string
  images?: string[]
  zoom?: string | number
  lockScroll?: boolean
  indicator?: boolean
  closeable?: boolean
  teleport?: TeleportProps['to']
  onOpen?: ListenerProp<() => void>
  onOpened?: ListenerProp<() => void>
  onClose?: ListenerProp<() => void>
  onClosed?: ListenerProp<() => void>
  onChange?: ListenerProp<(index: number) => void>
  'onUpdate:show'?: ListenerProp<(show: boolean) => void>
}

export interface ImagePreviewOptions {
  current?: string
  images?: string[]
  zoom?: string | number
  lockScroll?: boolean
  indicator?: boolean
  closeable?: boolean
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  onChange?: (index: number) => void
}

export class ImagePreviewComponent extends VarComponent {
  $props: ImagePreviewProps

  $slots: {
    indicator(): VNode[]
    extra(): VNode[]
    'close-icon'(): VNode[]
  }
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
