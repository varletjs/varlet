import Cell from './Cell.vue'

Cell.install = function(app: any) {
  app.component(Cell.name, Cell)
}

export default Cell
