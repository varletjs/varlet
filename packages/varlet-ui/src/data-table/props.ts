import { type HTMLAttributes, type PropType, type VNodeChild } from 'vue'
import { defineListenerProp } from '../utils/components'

export type DataTableSurface = 'low'

export type DataTableTableLayout = 'auto' | 'fixed'

export type DataTableKey = string | number

export type DataTableColumnAlign = 'left' | 'center' | 'right'

export type DataTableColumnFixed = 'left' | 'right'

export type DataTableRowKey<Row = any> =
  | Extract<keyof Row, string>
  | string
  | ((row: Row, rowIndex: number) => DataTableKey)

export interface DataTableRowBaseContext<Row = any> {
  row: Row
  rowIndex: number
}

export interface DataTableColumnRenderContext<Row = any> extends DataTableRowBaseContext<Row> {}

export interface DataTableRowPropsContext<Row = any> extends DataTableRowBaseContext<Row> {}

export interface DataTableCellPropsContext<Row = any> extends DataTableRowBaseContext<Row> {}

export type DataTableColumnCellSpan<Row = any> = number | ((context: DataTableCellPropsContext<Row>) => number)

export type DataTableColumnSelectionDisabled<Row = any> =
  | boolean
  | ((context: DataTableRowPropsContext<Row>) => boolean)

export interface DataTableSelectionColumnContext<Row = any> extends DataTableRowBaseContext<Row> {
  checked: boolean
}

export interface DataTableExpandColumnContext<Row = any> extends DataTableRowBaseContext<Row> {
  expanded: boolean
}

export type DataTableRowProps<Row = any> =
  | HTMLAttributes
  | ((context: DataTableRowPropsContext<Row>) => HTMLAttributes | undefined)

export type DataTableCellProps<Row = any> =
  | HTMLAttributes
  | ((context: DataTableCellPropsContext<Row>) => HTMLAttributes | undefined)

export interface DataTableBaseColumn<Row = any> {
  fixed?: DataTableColumnFixed
  width?: string | number
  minWidth?: string | number
  align?: DataTableColumnAlign
  titleAlign?: DataTableColumnAlign
  titleColSpan?: number
  colSpan?: DataTableColumnCellSpan<Row>
  rowSpan?: DataTableColumnCellSpan<Row>
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
  disabled?: DataTableColumnSelectionDisabled<Row>
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

export const props = {
  data: {
    type: Array as PropType<any[]>,
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
  tree: {
    type: [Boolean, Object] as PropType<boolean | DataTableTreeOption>,
    default: false,
  },
  surface: String as PropType<DataTableSurface>,
  cascade: {
    type: Boolean,
    default: true,
  },
  childrenKey: {
    type: String,
    default: 'children',
  },
  checkedRowKeys: {
    type: Array as PropType<DataTableKey[]>,
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
  'onUpdate:checkedRowKeys': defineListenerProp<(checkedRowKeys: DataTableKey[]) => void>(),
  'onUpdate:page': defineListenerProp<(page: number) => void>(),
  'onUpdate:pageSize': defineListenerProp<(pageSize: number) => void>(),
}
