import BottomNavigationItem from './BottomNavigationItem.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as bottomNavigationItemProps } from './props'

withInstall(BottomNavigationItem)
withPropsDefaultsSetter(BottomNavigationItem, bottomNavigationItemProps)

export { bottomNavigationItemProps }

export const _BottomNavigationItemComponent = BottomNavigationItem

export default BottomNavigationItem
