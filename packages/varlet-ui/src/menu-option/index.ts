import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import MenuOption from './MenuOption.vue'
import { props as menuOptionProps } from './props'

withInstall(MenuOption)
withPropsDefaultsSetter(MenuOption, menuOptionProps)

export { menuOptionProps }

export const _MenuOptionComponent = MenuOption

export default MenuOption
