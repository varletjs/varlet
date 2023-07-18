import Tab from './Tab.vue'
import { withInstall } from '../utils/components'

withInstall(Tab)

export { props as tabProps } from './props'

export const _TabComponent = Tab

export default Tab
