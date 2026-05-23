import { HTMLAttributes, VNode, VNodeChild } from 'vue'
import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export declare const dataTableProps: Record<keyof DataTableProps, any>

export type DataTableColumnAlign = 'left' | 'center' | 'right'
export type DataTableColumnFixed = 'left' | 'right'
export type DataTableSurface = 'low'
export type DataTableTableLayout = 'auto' | 'fixed'
export type DataTableSortMode = 'single' | 'multiple'
export type DataTableSorterOrder = 'asc' | 'desc'

export type DataTableRowKey<Row = any> = keyof Row | string | ((row: Row, rowIndex: number) => string | number)

export interface DataTableRowBaseContext<Row = any> {
  row: Row
  rowIndex: number
}

export interface DataTableColumnRenderContext<Row = any> extends DataTableRowBaseContext<Row> {}

export interface DataTableRowPropsContext<Row = any> extends DataTableRowBaseContext<Row> {}

export interface DataTableCellPropsContext<Row = any> extends DataTableRowBaseContext<Row> {}

export type DataTableColumnCellSpan<Row = any> = number | ((context: DataTableRowBaseContext<Row>) => number)
export type DataTableColumnSelectable<Row = any> = boolean | ((context: DataTableRowBaseContext<Row>) => boolean)

export interface DataTableSelectionColumnContext<Row = any> extends DataTableRowBaseContext<Row> {
  checked: boolean
}

export type DataTableRowProps<Row = any> =
  | HTMLAttributes
  | ((context: DataTableRowPropsContext<Row>) => HTMLAttributes | undefined)

export type DataTableCellProps<Row = any> =
  | HTMLAttributes
  | ((context: DataTableCellPropsContext<Row>) => HTMLAttributes | undefined)

export interface DataTableBaseColumn<Row = any> {
  fixed?: DataTableColumnFixed
  resizable?: boolean
  width?: string | number
  minWidth?: string | number
  maxWidth?: string | number
  align?: DataTableColumnAlign
  titleAlign?: DataTableColumnAlign
  titleColSpan?: number
  colSpan?: DataTableColumnCellSpan<Row>
  rowSpan?: DataTableColumnCellSpan<Row>
  cellProps?: DataTableCellProps<Row>
}

export interface DataTableSorter {
  key: string
  order: DataTableSorterOrder
}

export interface DataTableFieldColumn<Row = any> extends DataTableBaseColumn<Row> {
  type?: undefined
  key: string
  title: string
  sorter?: boolean
  render?: (context: DataTableColumnRenderContext<Row>) => VNodeChild
}

export interface DataTableSelectionColumn<Row = any> extends DataTableBaseColumn<Row> {
  type: 'selection'
  key?: string
  title?: string
  multiple?: boolean
  selectable?: DataTableColumnSelectable<Row>
  render?: never
}

export interface DataTableExpandColumn<Row = any> extends DataTableBaseColumn<Row> {
  type: 'expand'
  key?: string
  title?: string
  render?: never
  expandable?: (context: DataTableRowPropsContext<Row>) => boolean
  renderExpand: (context: DataTableRowBaseContext<Row>) => VNodeChild
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

export interface DataTableProps extends BasicAttributes {
  data?: any[]
  columns?: DataTableColumn[]
  rowKey?: DataTableRowKey
  rowProps?: DataTableRowProps
  loading?: boolean
  pagination?: boolean | DataTablePagination
  remote?: boolean
  page?: number
  pageSize?: number
  total?: number
  maxHeight?: number | string
  scrollX?: number | string
  sorters?: DataTableSorter[]
  sortMode?: DataTableSortMode
  tree?: boolean
  surface?: DataTableSurface
  cascade?: boolean
  childrenKey?: string
  plain?: boolean
  elevation?: boolean | string | number
  cellBordered?: boolean
  tableLayout?: DataTableTableLayout
  size?: 'small' | 'normal' | 'large'
  checkedRowKeys?: Array<string | number>
  'onUpdate:checkedRowKeys'?: ListenerProp<(checkedRowKeys: Array<string | number>) => void>
  'onUpdate:page'?: ListenerProp<(page: number) => void>
  'onUpdate:pageSize'?: ListenerProp<(pageSize: number) => void>
  'onUpdate:sorters'?: ListenerProp<(sorters: DataTableSorter[]) => void>
}

export class DataTable extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<DataTableProps>

  $props: DataTableProps

  $slots: {
    loadingDescription(): VNode[]
    footerPrefix(): VNode[]
  }
}

export class _DataTableComponent extends DataTable {}
