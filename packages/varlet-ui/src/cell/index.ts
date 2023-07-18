import Cell from './Cell.vue'
import { withInstall } from '../utils/components'

withInstall(Cell)

export { props as cellProps } from './props'

export const _CellComponent = Cell

export default Cell
