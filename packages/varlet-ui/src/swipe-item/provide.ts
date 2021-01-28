import { ComputedRef } from 'vue'

export interface SwipeItemProvider {
	index: ComputedRef<number>
	setTranslate(x: number): void
}
