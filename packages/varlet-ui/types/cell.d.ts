import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export interface CellProps extends BasicAttributes {
  title?: string | number
  icon?: string
  desc?: string
  border?: boolean
  iconClass?: string
  titleClass?: string
  descClass?: string
  extraClass?: string
}

export class Cell extends VarComponent {
  $props: CellProps
}

export class _CellComponent extends Cell {}
