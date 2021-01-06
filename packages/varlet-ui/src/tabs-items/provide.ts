import { ComputedRef } from 'vue'

export interface TabsItemsProvider {
	active: ComputedRef<number | string>
	resize(): void
	resetTransitionHeight(): void
}

export const TABS_ITEMS_BIND_TAB_ITEM_KEY = Symbol('TABS_ITEMS_BIND_TAB_ITEM_KEY')
export const TABS_ITEMS_COUNT_TAB_ITEM_KEY = Symbol('TABS_ITEMS_COUNT_TAB_ITEM_KEY')
