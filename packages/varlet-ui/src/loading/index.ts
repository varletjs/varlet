import type { App } from 'vue'
import Loading from './Loading.vue'

Loading.install = function (app: App) {
  app.component(Loading.name, Loading)
}

export const _LoadingComponent = Loading

export default Loading
