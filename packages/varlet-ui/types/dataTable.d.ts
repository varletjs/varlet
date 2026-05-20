import { HTMLAttributes, VNode, VNodeChild } from 'vue'
import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export declare const dataTableProps: Record<keyof DataTableProps, any>

export type DataTableKey = string | number

export type DataTableAlign = 'left' | 'center' | 'right'

export type DataTableRowKey<Row = any> = keyof Row | string | ((row: Row, rowIndex: number) => DataTableKey)

export interface DataTableColumnRenderContext<Row = any> {
  row: Row
  rowIndex: number
  pageRowIndex: number
  column: DataTableColumn<Row>
}

export interface DataTableRowPropsContext<Row = any> {
  row: Row
  rowIndex: number
  pageRowIndex: number
}

export interface DataTableCellPropsContext<Row = any> extends DataTableRowPropsContext<Row> {
  column: DataTableColumn<Row>
}

export type DataTableRowProps<Row = any> =
  | HTMLAttributes
  | ((context: DataTableRowPropsContext<Row>) => HTMLAttributes | undefined)

export type DataTableCellProps<Row = any> =
  | HTMLAttributes
  | ((context: DataTableCellPropsContext<Row>) => HTMLAttributes | undefined)

export interface DataTableColumn<Row = any> {
  key: string
  title: string
  width?: string | number
  minWidth?: string | number
  align?: DataTableAlign
  titleAlign?: DataTableAlign
  cellProps?: DataTableCellProps<Row>
  render?: (context: DataTableColumnRenderContext<Row>) => VNodeChild
}

export interface DataTablePagination {
  simple?: boolean
  disabled?: boolean
  showSizeChanger?: boolean
  showQuickJumper?: boolean
  maxPagerCount?: number
  sizeOption?: number[]
  showTotal?: (total: number, range: [number, number]) => string
}

export interface DataTableProps extends BasicAttributes {
  data?: any[]
  columns?: DataTableColumn[]
  rowKey?: DataTableRowKey
  rowProps?: DataTableRowProps
  loading?: boolean
  pagination?: boolean | DataTablePagination
  remote?: boolean
  page?: number | string
  pageSize?: number | string
  total?: number | string
  elevation?: boolean | string | number
  striped?: boolean
  cellBordered?: boolean
  size?: 'small' | 'normal' | 'large'
  emptyText?: string
  'onUpdate:page'?: ListenerProp<(page: number) => void>
  'onUpdate:pageSize'?: ListenerProp<(pageSize: number) => void>
}

export class DataTable extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<DataTableProps>

  $props: DataTableProps

  $slots: {
    loading(): VNode[]
    footerPrefix(): VNode[]
  }
}

export class _DataTableComponent extends DataTable {}
