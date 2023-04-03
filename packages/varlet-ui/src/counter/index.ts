import type { App } from 'vue'
import Counter from './Counter.vue'

Counter.install = function (app: App) {
  app.component(Counter.name, Counter)
}

export { props as counterProps } from './props'

export const _CounterComponent = Counter

export default Counter
