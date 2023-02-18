import type { App } from 'vue'
import Paper from './Paper.vue'

Paper.install = function (app: App) {
  app.component(Paper.name, Paper)
}

export { props as paperProps } from './props'

export const _PaperComponent = Paper

export default Paper
