import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as virtualListProps } from './props'
import VirtualList from './VirtualList.vue'

withInstall(VirtualList)
withPropsDefaultsSetter(VirtualList, virtualListProps)

export { virtualListProps }

export const _VirtualListComponent = VirtualList

export default VirtualList
