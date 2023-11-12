import Tab from './Tab.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as tabProps } from './props'

withInstall(Tab)
withPropsDefaultsSetter(Tab, tabProps)

export { tabProps }

export const _TabComponent = Tab

export default Tab
