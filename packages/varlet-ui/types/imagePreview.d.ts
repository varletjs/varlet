import { VarComponent, BasicAttributes } from './varComponent'
import { App, TeleportProps, VNode } from 'vue'

export interface ImagePreviewProps extends BasicAttributes {
  show?: boolean
  current?: string
  images?: string[]
  zoom?: string | number
  lockScroll?: boolean
  indicator?: boolean
  closeable?: boolean
  teleport?: TeleportProps['to']
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  onChange?: (index: number) => void
  'onUpdate:show'?: (show: boolean) => void
}

export interface ImagePreviewOptions {
  show?: boolean
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

  close(): void

  install(app: App): void
}

export const ImagePreview: IImagePreview

export class _ImagePreviewComponent extends ImagePreviewComponent {}
