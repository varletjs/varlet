import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as rowProps } from './props'
import Row from './Row.vue'

withInstall(Row)
withPropsDefaultsSetter(Row, rowProps)

export { rowProps }

export const _RowComponent = Row

export default Row
