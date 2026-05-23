import { type HTMLAttributes, type PropType, type VNodeChild } from 'vue'
import { defineListenerProp } from '../utils/components'

export type DataTableSurface = 'low'

export type DataTableTableLayout = 'auto' | 'fixed'
export type DataTableSortMode = 'single' | 'multiple'
export type DataTableSorterOrder = 'asc' | 'desc'

export type DataTableColumnAlign = 'left' | 'center' | 'right'

export type DataTableColumnFixed = 'left' | 'right'

export type DataTableRowData = Record<string, any>

export type DataTableRowKey<Row = any> =
  | Extract<keyof Row, string>
  | string
  | ((row: Row, rowIndex: number) => string | number)

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

export const props = {
  data: {
    type: Array as PropType<DataTableRowData[]>,
    default: () => [],
  },
  columns: {
    type: Array as PropType<DataTableColumn[]>,
    default: () => [],
  },
  rowKey: {
    type: [String, Function] as PropType<DataTableRowKey>,
    default: 'id',
  },
  rowProps: {
    type: [Object, Function] as PropType<DataTableRowProps>,
  },
  loading: Boolean,
  pagination: {
    type: [Boolean, Object] as PropType<boolean | DataTablePagination>,
    default: true,
  },
  remote: Boolean,
  page: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  total: Number,
  maxHeight: [Number, String],
  scrollX: [Number, String],
  sorters: {
    type: Array as PropType<DataTableSorter[]>,
    default: () => [],
  },
  sortMode: {
    type: String as PropType<DataTableSortMode>,
    default: 'single',
  },
  tree: Boolean,
  surface: String as PropType<DataTableSurface>,
  cascade: {
    type: Boolean,
    default: true,
  },
  childrenKey: {
    type: String,
    default: 'children',
  },
  plain: Boolean,
  checkedRowKeys: {
    type: Array as PropType<Array<string | number>>,
    default: () => [],
  },
  elevation: {
    type: [Boolean, Number, String],
    default: true,
  },
  cellBordered: Boolean,
  tableLayout: {
    type: String as PropType<DataTableTableLayout>,
    default: 'auto',
  },
  size: {
    type: String as PropType<'small' | 'normal' | 'large'>,
    default: 'normal',
  },
  'onUpdate:checkedRowKeys': defineListenerProp<(checkedRowKeys: Array<string | number>) => void>(),
  'onUpdate:page': defineListenerProp<(page: number) => void>(),
  'onUpdate:pageSize': defineListenerProp<(pageSize: number) => void>(),
  'onUpdate:sorters': defineListenerProp<(sorters: DataTableSorter[]) => void>(),
}
