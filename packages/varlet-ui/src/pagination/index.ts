import Pagination from './Pagination.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as paginationProps } from './props'

withInstall(Pagination)
withPropsDefaultsSetter(Pagination, paginationProps)

export { paginationProps }

export const _PaginationComponent = Pagination

export default Pagination
