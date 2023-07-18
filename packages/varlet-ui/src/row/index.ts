import Row from './Row.vue'
import { withInstall } from '../utils/components'

withInstall(Row)

export { props as rowProps } from './props'

export const _RowComponent = Row

export default Row
