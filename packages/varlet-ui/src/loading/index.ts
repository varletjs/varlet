import type { App } from 'vue'
import Loading from './Loading.vue'

Loading.install = function (app: App) {
  app.component(Loading.name, Loading)
}

export { props as loadingProps } from './props'

export const _LoadingComponent = Loading

export default Loading
