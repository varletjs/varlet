import type { App } from 'vue'
import Badge from './Badge.vue'

Badge.install = function (app: App) {
  app.component(Badge.name, Badge)
}

export const _BadgeComponent = Badge

export default Badge
