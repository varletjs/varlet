import Menu from './Menu.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as menuProps } from './props'

withInstall(Menu)
withPropsDefaultsSetter(Menu, menuProps)

export { menuProps }

export const _MenuComponent = Menu

export default Menu
