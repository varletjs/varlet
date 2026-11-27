import { VNode } from 'vue'
import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export type VirtualListKey = string | number
export type VirtualListItemSize<T = any> = number | ((item: T, index: number) => number)
export type VirtualListItemKey<T = any> = string | ((item: T, index: number) => VirtualListKey)
export type VirtualListScrollTarget = string | HTMLElement | Window | (() => HTMLElement | Window | null | undefined)
export type VirtualListAlign = 'start' | 'center' | 'end' | 'auto'

export interface VirtualListScrollToOptions {
  align?: VirtualListAlign
  behavior?: ScrollBehavior
}

export interface VirtualListRange {
  start: number
  end: number
  visibleStart: number
  visibleEnd: number
}

export interface VirtualListProps<T = any> extends BasicAttributes {
  items?: T[]
  itemSize: VirtualListItemSize<T>
  itemKey: VirtualListItemKey<T>
  dynamic?: boolean
  preserveScrollPosition?: boolean
  height?: string | number
  ssrHeight?: number
  overscan?: number
  scrollTarget?: VirtualListScrollTarget
  onRangeChange?: ListenerProp<(range: VirtualListRange) => void>
}

export declare const virtualListProps: Record<keyof VirtualListProps, any>

export class VirtualList<T = any> extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<VirtualListProps>
  $props: VirtualListProps<T>
  $slots: {
    default(data: { item: T; index: number }): VNode[]
  }
  scrollToIndex(index: number, options?: VirtualListScrollToOptions): void
  scrollToOffset(offset: number, behavior?: ScrollBehavior): void
  resize(): void
  resetMeasurements(): void
}

export class _VirtualListComponent extends VirtualList {}
