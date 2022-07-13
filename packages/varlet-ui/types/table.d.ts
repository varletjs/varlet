import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export interface TableProps extends BasicAttributes {
  fullWidth?: string | number
}

export class Table extends VarComponent {
  $props: TableProps
}

export class _TableComponent extends Table {}
