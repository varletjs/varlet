import TabItem from './TabItem.vue'
import { withInstall } from '../utils/components'

withInstall(TabItem)

export { props as tabItemProps } from './props'

export const _TabItemComponent = TabItem

export default TabItem
