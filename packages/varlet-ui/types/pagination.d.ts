import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { VNode } from 'vue'

type Range = [number, number]

export declare const paginationProps: Record<keyof PaginationProps, any>

export interface PaginationProps extends BasicAttributes {
  current?: string | number
  size?: string | number
  total?: string | number
  maxPagerCount?: number
  disabled?: boolean
  simple?: boolean
  elevation?: boolean | string | number
  showSizeChanger?: boolean
  showQuickJumper?: boolean
  sizeOption?: Array<number>
  showTotal?: (total: number, range: Range) => string
  onChange?: ListenerProp<(current: number, size: number) => void>
  'onUpdate:current'?: ListenerProp<(current: number) => void>
  'onUpdate:size'?: ListenerProp<(size: number) => void>
}

export class Pagination extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<PaginationProps>

  $props: PaginationProps

  $slots: {
    prev(): VNode[]
    next(): VNode[]
  }
}

export class _PaginationComponent extends Pagination {}
