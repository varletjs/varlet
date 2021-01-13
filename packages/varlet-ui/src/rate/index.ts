import { App } from 'vue'
import Rate from './Rate.vue'

Rate.install = function(app: App) {
  app.component(Rate.name, Rate)
}

export default Rate
