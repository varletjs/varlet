import { App } from 'vue'
import Counter from './Counter.vue'

Counter.install = function(app: App) {
  app.component(Counter.name, Counter)
}

export default Counter
