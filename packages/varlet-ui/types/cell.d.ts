import { VarComponent, BasicAttributes } from './varComponent'

export interface CellProps extends BasicAttributes {
  title?: string | number
  icon?: string
  description?: string
  border?: boolean
  iconClass?: string
  titleClass?: string
  descriptionClass?: string
  extraClass?: string
}

export class Cell extends VarComponent {
  $props: CellProps
}

export class _CellComponent extends Cell {}
