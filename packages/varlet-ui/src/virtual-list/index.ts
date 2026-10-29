import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as virtualListProps } from './props'
import VirtualList from './VirtualList.vue'

withInstall(VirtualList)
withPropsDefaultsSetter(VirtualList, virtualListProps)

export { virtualListProps }
export type {
  VirtualListAlign,
  VirtualListItemKey,
  VirtualListItemSize,
  VirtualListKey,
  VirtualListRange,
  VirtualListScrollTarget,
  VirtualListScrollToOptions,
} from './props'

export const _VirtualListComponent = VirtualList

export default VirtualList
