import { App } from 'vue'
import Badge from './Badge.vue'

Badge.install = function (app: App) {
  app.component(Badge.name, Badge)
}

export default Badge
