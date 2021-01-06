import { ComputedRef } from 'vue'

export interface TabItemProvider {
	index: ComputedRef<number>
	name: ComputedRef<string | number | undefined>
	element: ComputedRef<HTMLElement | null>
	transition(newIndex: number, oldIndex: number): void
}
