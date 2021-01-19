import { ComputedRef, Ref } from 'vue'

export interface IndexAnchorProvider {
	index: ComputedRef<number> | null
	name: ComputedRef<string | number | undefined>
	ownTop: Ref<number>
	setOwnTop: () => void
}
