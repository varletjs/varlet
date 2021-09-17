import Pagination from './Pagination.vue'
import type { App } from 'vue'

Pagination.install = function (app: App) {
  app.component(Pagination.name, Pagination)
}

export const _PaginationComponent = Pagination

export default Pagination
