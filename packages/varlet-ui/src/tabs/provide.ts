import { ComputedRef } from 'vue'
import { TabProvider } from '../tab/provide'

export interface TabsProvider {
	active: ComputedRef<number | string>
	activeColor: ComputedRef<string | undefined>
	inactiveColor: ComputedRef<string | undefined>
	disabledColor: ComputedRef<string | undefined>
  tabDirection: ComputedRef<string>
	resize(): void
	onTabClick(tabProvider: TabProvider): void
}

export const TABS_BIND_TAB_KEY = Symbol('TABS_BIND_TAB_KEY')
export const TABS_COUNT_TAB_KEY = Symbol('TABS_COUNT_TAB_KEY')
