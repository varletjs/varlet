import { ComputedRef } from 'vue'

export interface TabMessage {
	name: string | number | undefined
	index: ComputedRef<number>
	element: HTMLElement | null
}

export interface TabsController {
	receiveTabMessage(tabMessage: TabMessage): void
	clearTabMessage(tabMessage: TabMessage): void
	onTabClick(tabMessage: TabMessage): void
}

export const TABS_CONTROLLER_KEY = Symbol('TABS_CONTROLLER_KEY')
export const TAB_COUNTER_KEY = Symbol('TAB_COUNTER_KEY')

export const props = {
	active: {
		type: [String, Number],
		default: 0,
	},
	'onUpdate:active': {
		type: Function,
	},
	onChange: {
		type: Function,
	},
}
