import Row from './Row.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as rowProps } from './props'

withInstall(Row)
withPropsDefaultsSetter(Row, rowProps)

export { rowProps }

export const _RowComponent = Row

export default Row
