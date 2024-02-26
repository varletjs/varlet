import List from './List.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as listProps } from './props'

withInstall(List)
withPropsDefaultsSetter(List, listProps)

export { listProps }

export const _ListComponent = List

export default List
