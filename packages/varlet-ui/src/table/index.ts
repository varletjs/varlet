import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as tableProps } from './props'
import Table from './Table.vue'

withInstall(Table)
withPropsDefaultsSetter(Table, tableProps)

export { tableProps }

export const _TableComponent = Table

export default Table
