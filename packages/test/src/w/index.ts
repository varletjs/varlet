import Create from './Create.vue'
import type { App } from 'vue'

Create.install = function (app: App) {
  app.component(Create.name, Create)
}

export const _CreateComponent = Create

export default Create
