import { type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type VirtualListKey = string | number
export type VirtualListItemSize = number | ((item: any, index: number) => number)
export type VirtualListItemKey = string | ((item: any, index: number) => VirtualListKey)
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

export const props = {
  items: { type: Array as PropType<any[]>, default: () => [] },
  itemSize: {
    type: [Number, Function] as PropType<VirtualListItemSize>,
    required: true,
    validator: (size: VirtualListItemSize) => typeof size === 'function' || (Number.isFinite(size) && size > 0),
  },
  itemKey: { type: [String, Function] as PropType<VirtualListItemKey>, required: true },
  dynamic: Boolean,
  preserveScrollPosition: Boolean,
  height: { type: [String, Number], default: 300 },
  ssrHeight: { type: Number, validator: (height: number) => Number.isFinite(height) && height >= 0 },
  overscan: { type: Number, default: 5 },
  scrollTarget: [String, Object, Function] as PropType<VirtualListScrollTarget>,
  onRangeChange: defineListenerProp<(range: VirtualListRange) => void>(),
}
