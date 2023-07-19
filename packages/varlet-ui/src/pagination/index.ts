import Pagination from './Pagination.vue'
import { withInstall } from '../utils/components'

withInstall(Pagination)

export { props as paginationProps } from './props'

export const _PaginationComponent = Pagination

export default Pagination
