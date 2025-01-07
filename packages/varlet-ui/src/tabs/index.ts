import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as tabsProps } from './props'
import Tabs from './Tabs.vue'

withInstall(Tabs)
withPropsDefaultsSetter(Tabs, tabsProps)

export { tabsProps }

export const _TabsComponent = Tabs

export default Tabs
