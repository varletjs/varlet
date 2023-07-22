import BottomNavigationItem from './BottomNavigationItem.vue'
import { withInstall } from '../utils/components'

withInstall(BottomNavigationItem)

export { props as bottomNavigationItemProps } from './props'

export const _BottomNavigationItemComponent = BottomNavigationItem

export default BottomNavigationItem
