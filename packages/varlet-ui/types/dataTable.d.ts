import { HTMLAttributes, VNode, VNodeChild } from 'vue'
import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export declare const dataTableProps: Record<keyof DataTableProps, any>

export type DataTableKey = string | number

export type DataTableAlign = 'left' | 'center' | 'right'
export type DataTableFixed = 'left' | 'right'

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

export type DataTableCellSpan<Row = any> = number | ((context: DataTableCellPropsContext<Row>) => number)
export type DataTableSelectionDisabled<Row = any> = boolean | ((context: DataTableRowPropsContext<Row>) => boolean)
export interface DataTableExpandColumnContext<Row = any> extends DataTableRowPropsContext<Row> {
  expanded: boolean
}

export type DataTableRowProps<Row = any> =
  | HTMLAttributes
  | ((context: DataTableRowPropsContext<Row>) => HTMLAttributes | undefined)

export type DataTableCellProps<Row = any> =
  | HTMLAttributes
  | ((context: DataTableCellPropsContext<Row>) => HTMLAttributes | undefined)

export interface DataTableBaseColumn<Row = any> {
  fixed?: DataTableFixed
  width?: string | number
  minWidth?: string | number
  align?: DataTableAlign
  titleAlign?: DataTableAlign
  titleColSpan?: number
  colSpan?: DataTableCellSpan<Row>
  rowSpan?: DataTableCellSpan<Row>
  cellProps?: DataTableCellProps<Row>
}

export interface DataTableFieldColumn<Row = any> extends DataTableBaseColumn<Row> {
  type?: undefined
  key: string
  title: string
  render?: (context: DataTableColumnRenderContext<Row>) => VNodeChild
}

export interface DataTableSelectionColumn<Row = any> extends DataTableBaseColumn<Row> {
  type: 'selection'
  key?: string
  title?: string
  multiple?: boolean
  disabled?: DataTableSelectionDisabled<Row>
  render?: never
}

export interface DataTableExpandColumn<Row = any> extends DataTableBaseColumn<Row> {
  type: 'expand'
  key?: string
  title?: string
  render?: never
  expandable?: (context: DataTableRowPropsContext<Row>) => boolean
  renderExpand: (context: DataTableExpandColumnContext<Row>) => VNodeChild
}

export type DataTableColumn<Row = any> =
  | DataTableFieldColumn<Row>
  | DataTableSelectionColumn<Row>
  | DataTableExpandColumn<Row>

export interface DataTablePagination {
  simple?: boolean
  disabled?: boolean
  showSizeChanger?: boolean
  showQuickJumper?: boolean
  maxPagerCount?: number
  sizeOption?: number[]
  showTotal?: (total: number, range: [number, number]) => string
}

export interface DataTableTreeOption {
  disabled?: boolean
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
  maxHeight?: number | string
  tree?: boolean | DataTableTreeOption
  cascade?: boolean
  childrenKey?: string
  elevation?: boolean | string | number
  striped?: boolean
  cellBordered?: boolean
  size?: 'small' | 'normal' | 'large'
  emptyText?: string
  'onUpdate:checkedRowKeys'?: ListenerProp<(checkedRowKeys: DataTableKey[]) => void>
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
