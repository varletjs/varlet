import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as tabProps } from './props'
import Tab from './Tab.vue'

withInstall(Tab)
withPropsDefaultsSetter(Tab, tabProps)

export { tabProps }

export const _TabComponent = Tab

export default Tab
