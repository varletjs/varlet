import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import MenuSelect from './MenuSelect.vue'
import { props as menuSelectProps } from './props'

withInstall(MenuSelect)
withPropsDefaultsSetter(MenuSelect, menuSelectProps)

export { menuSelectProps }

export const _MenuSelectComponent = MenuSelect

export default MenuSelect
