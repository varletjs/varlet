import { VarComponent } from './varComponent'

export interface TableProps {
  fullWidth?: string | number
}

export class Table extends VarComponent {
  $props: TableProps
}

export class _TableComponent extends Table {}
