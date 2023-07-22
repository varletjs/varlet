import AppBar from './AppBar.vue'
import { withInstall } from '../utils/components'

withInstall(AppBar)

export { props as appBarProps } from './props'

export const _AppBarComponent = AppBar

export default AppBar
