import type { App } from 'vue'
import Cell from './Cell.vue'

Cell.install = function (app: App) {
  app.component(Cell.name, Cell)
}

export { props as cellProps } from './props'

export const _CellComponent = Cell

export default Cell
