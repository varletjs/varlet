import type { App } from 'vue'
import Uploader from './Uploader.vue'

Uploader.install = function (app: App) {
  app.component(Uploader.name, Uploader)
}

export const _UploaderComponent = Uploader

export default Uploader
