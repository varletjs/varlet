import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as railNavigationProps } from './props'
import RailNavigation from './RailNavigation.vue'

withInstall(RailNavigation)
withPropsDefaultsSetter(RailNavigation, railNavigationProps)

export { railNavigationProps }

export const _RailNavigationComponent = RailNavigation

export default RailNavigation
