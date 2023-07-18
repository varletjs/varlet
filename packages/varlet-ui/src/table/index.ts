import Table from './Table.vue'
import { withInstall } from '../utils/components'

withInstall(Table)

export { props as tableProps } from './props'

export const _TableComponent = Table

export default Table
