import { App } from 'vue'
import Image from './Image.vue'

Image.install = function(app: App) {
  app.component(Image.name, Image)
}

export default Image
