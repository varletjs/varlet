import { VNode } from 'vue'
import { BasicAttributes, SetPropsDefaults, VarComponent } from './varComponent'

export declare const tableProps: Record<keyof TableProps, any>

export interface TableProps extends BasicAttributes {
  fullWidth?: string | number
  scrollerHeight?: string | number
  elevation?: boolean | string | number
}

export class Table extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<TableProps>

  $props: TableProps

  $slots: {
    default(): VNode[]
    footer(): VNode[]
  }
}

export class _TableComponent extends Table {}
