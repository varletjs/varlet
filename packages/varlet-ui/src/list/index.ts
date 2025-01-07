import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import List from './List.vue'
import { props as listProps } from './props'

withInstall(List)
withPropsDefaultsSetter(List, listProps)

export { listProps }

export const _ListComponent = List

export default List
