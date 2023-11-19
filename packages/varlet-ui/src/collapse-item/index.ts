import CollapseItem from './CollapseItem.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as collapseItemProps } from './props'

withInstall(CollapseItem)
withPropsDefaultsSetter(CollapseItem, collapseItemProps)

export { collapseItemProps }

export const _CollapseItemComponent = CollapseItem

export default CollapseItem
