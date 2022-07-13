import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

type Range = [number, number]

export interface PaginationProps extends BasicAttributes {
  current?: string | number
  size?: string | number
  total?: string | number
  maxPagerCount?: number
  disabled?: boolean
  simple?: boolean
  showSizeChanger?: boolean
  showQuickJumper?: boolean
  sizeOption?: Array<number>
  showTotal?: (total: number, range: Range) => string
  onChange?: (current: number, size: number) => void
  'onUpdate:current': (current: number) => void
  'onUpdate:size': (size: number) => void
}

export class Pagination extends VarComponent {
  $props: PaginationProps
}

export class _PaginationComponent extends Pagination {}
