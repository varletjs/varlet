import Badge from './Badge.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as badgeProps } from './props'

withInstall(Badge)
withPropsDefaultsSetter(Badge, badgeProps)

export { badgeProps }

export const _BadgeComponent = Badge

export default Badge
