import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export declare const tableProps: Record<string, any>

export interface TableProps extends BasicAttributes {
  fullWidth?: string | number
}

export class Table extends VarComponent {
  $props: TableProps

  $slots: {
    default(): VNode[]
    footer(): VNode[]
  }
}

export class _TableComponent extends Table {}
