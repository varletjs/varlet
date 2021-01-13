import { ComputedRef } from 'vue'

export interface TabProvider {
	name: ComputedRef<number | string | undefined>
	index: ComputedRef<number>
  disabled: ComputedRef<boolean>
	element: ComputedRef<HTMLElement | null>
}
