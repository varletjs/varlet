import { ComputedRef, Ref } from 'vue'

export interface SwipeProvider {
	size: Ref<number>
	vertical: ComputedRef<boolean>
}

export const SWIPE_BIND_SWIPE_ITEM_KEY = Symbol('SWIPE_BIND_SWIPE_ITEM_KEY')
export const SWIPE_COUNT_SWIPE_ITEM_KEY = Symbol('SWIPE_COUNT_SWIPE_ITEM_KEY')
