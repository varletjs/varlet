import { ComputedRef } from 'vue'

export interface ExpansionPanelsProvider {
	active: ComputedRef<number | string | Array<number | string> | undefined>
	offset: ComputedRef<boolean>
	updateItem: (value: number | string | undefined, isExpand: boolean) => void
}

export const EXPANSION_PANELS_BIND_EXPANSION_PANEL_KEY = Symbol('EXPANSION_PANELS_BIND_EXPANSION_PANEL_KEY')
export const EXPANSION_PANELS_COUNT_EXPANSION_PANEL_KEY = Symbol('EXPANSION_PANELS_COUNT_EXPANSION_PANEL_KEY')
