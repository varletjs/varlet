import Table from './Table.vue'
import type { App } from 'vue'

Table.install = function (app: App) {
  app.component(Table.name, Table)
}

export const _TableComponent = Table

export default Table
