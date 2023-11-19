import Tabs from './Tabs.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as tabsProps } from './props'

withInstall(Tabs)
withPropsDefaultsSetter(Tabs, tabsProps)

export { tabsProps }

export const _TabsComponent = Tabs

export default Tabs
