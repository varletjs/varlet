import { type HTMLAttributes, type PropType, type VNodeChild } from 'vue'
import { defineListenerProp } from '../utils/components'

export type DataTableKey = string | number

export type DataTableAlign = 'left' | 'center' | 'right'

export type DataTableRowKey<Row = any> =
  | Extract<keyof Row, string>
  | string
  | ((row: Row, rowIndex: number) => DataTableKey)

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

export interface DataTableSelectionColumnContext<Row = any> extends DataTableRowPropsContext<Row> {
  checked: boolean
}

export type DataTableRowProps<Row = any> =
  | HTMLAttributes
  | ((context: DataTableRowPropsContext<Row>) => HTMLAttributes | undefined)

export type DataTableCellProps<Row = any> =
  | HTMLAttributes
  | ((context: DataTableCellPropsContext<Row>) => HTMLAttributes | undefined)

export interface DataTableBaseColumn<Row = any> {
  width?: string | number
  minWidth?: string | number
  align?: DataTableAlign
  titleAlign?: DataTableAlign
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
  render?: never
  selectable?: (context: DataTableRowPropsContext<Row>) => boolean
}

export type DataTableColumn<Row = any> = DataTableFieldColumn<Row> | DataTableSelectionColumn<Row>

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
    type: [Number, String],
    default: 1,
  },
  pageSize: {
    type: [Number, String],
    default: 10,
  },
  total: [Number, String],
  checkedRowKeys: {
    type: Array as PropType<DataTableKey[]>,
    default: () => [],
  },
  elevation: {
    type: [Boolean, Number, String],
    default: true,
  },
  cellBordered: Boolean,
  size: {
    type: String as PropType<'small' | 'normal' | 'large'>,
    default: 'normal',
  },
  'onUpdate:checkedRowKeys': defineListenerProp<(checkedRowKeys: DataTableKey[]) => void>(),
  'onUpdate:page': defineListenerProp<(page: number) => void>(),
  'onUpdate:pageSize': defineListenerProp<(pageSize: number) => void>(),
}
