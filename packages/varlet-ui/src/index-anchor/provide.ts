import { ComputedRef } from 'vue'

export interface IndexAnchorProvider {
	index: ComputedRef<number>
	name: ComputedRef<string | number | undefined>
	getTop: () => number
}
