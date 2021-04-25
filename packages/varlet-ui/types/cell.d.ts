import { VarComponent } from './varComponent'

interface CellProps {
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
