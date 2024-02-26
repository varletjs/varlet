import TabItem from './TabItem.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as tabItemProps } from './props'

withInstall(TabItem)
withPropsDefaultsSetter(TabItem, tabItemProps)

export { tabItemProps }

export const _TabItemComponent = TabItem

export default TabItem
