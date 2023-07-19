import List from './List.vue'
import { withInstall } from '../utils/components'

withInstall(List)

export { props as listProps } from './props'

export const _ListComponent = List

export default List
