import { ComputedRef } from 'vue'

export interface ExpansionPanelProvider {
	index: ComputedRef<number>
	name: ComputedRef<string | number | undefined>
	init(accordion: boolean): void
	toggle(isShow?: boolean, initOrAccordion?: boolean): void
}
