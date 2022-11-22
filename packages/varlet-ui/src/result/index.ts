import Result from './Result.vue'
import type { App } from 'vue'

Result.install = function (app: App) {
  app.component(Result.name, Result)
}

export const _ResultComponent = Result

export default Result
