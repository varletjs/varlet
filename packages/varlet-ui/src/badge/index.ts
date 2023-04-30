import type { App } from 'vue'
import Badge from './Badge.vue'

Badge.install = function (app: App) {
  app.component(Badge.name, Badge)
}

export { props as badgeProps } from './props'

export const _BadgeComponent = Badge

export default Badge
