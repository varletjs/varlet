import MenuOption from './MenuOption.vue'
import { withInstall } from '../utils/components'

withInstall(MenuOption)

export { props as menuOptionProps } from './props'

export const _MenuOptionComponent = MenuOption

export default MenuOption
