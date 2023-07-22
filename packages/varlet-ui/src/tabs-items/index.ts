import TabsItems from './TabsItems.vue'
import { withInstall } from '../utils/components'

withInstall(TabsItems)

export { props as tabsItemsProps } from './props'

export const _TabsItemsComponent = TabsItems

export default TabsItems
