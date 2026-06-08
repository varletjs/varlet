import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as railNavigationItemProps } from './props'
import RailNavigationItem from './RailNavigationItem.vue'

withInstall(RailNavigationItem)
withPropsDefaultsSetter(RailNavigationItem, railNavigationItemProps)

export { railNavigationItemProps }

export const _RailNavigationItemComponent = RailNavigationItem

export default RailNavigationItem
