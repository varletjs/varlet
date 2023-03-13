import VarImagePreview from './ImagePreview.vue'
import { nextTick, reactive, type App, type TeleportProps } from 'vue'
import { inBrowser, isArray, isString } from '@varlet/shared'
import { call, mountInstance } from '../utils/components'

interface ImagePreviewOptions {
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
  // internal
  teleport?: TeleportProps['to']
}

let singletonOptions: ImagePreviewOptions | null
let defaultOptions: ImagePreviewOptions = {}

export type UserImagePreviewOptions = ImagePreviewOptions | string | Array<string>

function normalizeOptions(options: UserImagePreviewOptions = {}) {
  if (isString(options)) {
    return { ...defaultOptions, images: [options] }
  }
  if (isArray(options)) {
    return { ...defaultOptions, images: options }
  }
  return { ...defaultOptions, ...options }
}

function ImagePreview(options: string | string[] | ImagePreviewOptions) {
  if (!inBrowser()) {
    return
  }

  ImagePreview.close()

  const imagePreviewOptions: ImagePreviewOptions = normalizeOptions(options)
  const reactiveImagePreviewOptions: ImagePreviewOptions = reactive(imagePreviewOptions)
  reactiveImagePreviewOptions.teleport = 'body'
  singletonOptions = reactiveImagePreviewOptions

  const { unmountInstance } = mountInstance(VarImagePreview, reactiveImagePreviewOptions, {
    onClose: () => call(reactiveImagePreviewOptions.onClose),
    onClosed: () => {
      call(reactiveImagePreviewOptions.onClosed)
      unmountInstance()
      singletonOptions === reactiveImagePreviewOptions && (singletonOptions = null)
    },
    onRouteChange: () => {
      unmountInstance()
      singletonOptions === reactiveImagePreviewOptions && (singletonOptions = null)
    },
    'onUpdate:show': (value: boolean) => {
      reactiveImagePreviewOptions.show = value
    },
  })

  reactiveImagePreviewOptions.show = true
}

ImagePreview.close = () => {
  if (singletonOptions != null) {
    const prevSingletonOptions = singletonOptions
    singletonOptions = null

    nextTick().then(() => {
      prevSingletonOptions.show = false
    })
  }
}

ImagePreview.setDefaultOptions = (options: ImagePreviewOptions) => {
  defaultOptions = options
}

ImagePreview.resetDefaultOptions = () => {
  defaultOptions = {}
}

VarImagePreview.install = function (app: App) {
  app.component(VarImagePreview.name, VarImagePreview)
}

ImagePreview.install = function (app: App) {
  app.component(VarImagePreview.name, VarImagePreview)
}

ImagePreview.Component = VarImagePreview

export { props as imagePreviewProps } from './props'

export const _ImagePreviewComponent = VarImagePreview

export default ImagePreview
