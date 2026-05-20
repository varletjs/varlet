import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import DataTable from './DataTable.vue'
import { props as dataTableProps } from './props'

withInstall(DataTable)
withPropsDefaultsSetter(DataTable, dataTableProps)

export { dataTableProps }

export const _DataTableComponent = DataTable

export default DataTable
