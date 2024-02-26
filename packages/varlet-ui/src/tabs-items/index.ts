import TabsItems from './TabsItems.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as tabsItemsProps } from './props'

withInstall(TabsItems)
withPropsDefaultsSetter(TabsItems, tabsItemsProps)

export { tabsItemsProps }

export const _TabsItemsComponent = TabsItems

export default TabsItems
