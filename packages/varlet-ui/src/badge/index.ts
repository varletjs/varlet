import Badge from './Badge.vue'
import { withInstall } from '../utils/components'

withInstall(Badge)

export { props as badgeProps } from './props'

export const _BadgeComponent = Badge

export default Badge
