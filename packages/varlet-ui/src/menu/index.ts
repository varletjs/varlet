import Menu from './Menu.vue'
import { withInstall } from '../utils/components'

withInstall(Menu)

export { props as menuProps } from './props'

export const _MenuComponent = Menu

export default Menu
