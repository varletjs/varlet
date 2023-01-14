import type { App } from 'vue'
import Rate from './Rate.vue'

Rate.install = function (app: App) {
  app.component(Rate.name, Rate)
}

export { props as rateProps } from './props'

export const _RateComponent = Rate

export default Rate
