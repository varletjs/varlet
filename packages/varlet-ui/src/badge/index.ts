import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import Badge from './Badge.vue'
import { props as badgeProps } from './props'

withInstall(Badge)
withPropsDefaultsSetter(Badge, badgeProps)

export { badgeProps }

export const _BadgeComponent = Badge

export default Badge
