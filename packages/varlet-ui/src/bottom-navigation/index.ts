import BottomNavigation from './BottomNavigation.vue'
import { withInstall } from '../utils/components'

withInstall(BottomNavigation)

export { props as bottomNavigationProps } from './props'

export const _BottomNavigationComponent = BottomNavigation

export default BottomNavigation
