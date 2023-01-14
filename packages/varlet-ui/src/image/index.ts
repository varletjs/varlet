import type { App } from 'vue'
import Image from './Image.vue'

Image.install = function (app: App) {
  app.component(Image.name, Image)
}

export { props as imageProps } from './props'

export const _ImageComponent = Image

export default Image
