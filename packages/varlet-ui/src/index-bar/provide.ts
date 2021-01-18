import { ComputedRef } from 'vue'

export interface IndexBarProvider {
	active: ComputedRef<number | string | undefined>
	sticky: ComputedRef<boolean>
	stickyOffsetTop: ComputedRef<number>
	zIndex: ComputedRef<number | string>
}

export const INDEX_BAR_BIND_INDEX_ANCHOR_KEY = Symbol('INDEX_BAR_BIND_INDEX_ANCHOR_KEY')
export const INDEX_BAR_COUNT_INDEX_ANCHOR_KEY = Symbol('INDEX_BAR_COUNT_INDEX_ANCHOR_KEY')
