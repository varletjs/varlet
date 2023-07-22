import CollapseItem from './CollapseItem.vue'
import { withInstall } from '../utils/components'

withInstall(CollapseItem)

export { props as collapseItemProps } from './props'

export const _CollapseItemComponent = CollapseItem

export default CollapseItem
