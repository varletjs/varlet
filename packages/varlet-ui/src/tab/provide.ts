import { ComputedRef } from 'vue'

export interface TabProvider {
	name: ComputedRef<number | string | undefined>
	index: ComputedRef<number>
	element: ComputedRef<HTMLElement | null>
}
