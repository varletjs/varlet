import { App } from 'vue'
import Loading from './Loading.vue'

Loading.install = function (app: App) {
  app.component(Loading.name, Loading)
}

export default Loading
