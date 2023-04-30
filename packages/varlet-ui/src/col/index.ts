import type { App } from 'vue'
import Col from './Col.vue'

Col.install = function (app: App) {
  app.component(Col.name, Col)
}

export { props as colProps } from './props'

export const _ColComponent = Col

export default Col
