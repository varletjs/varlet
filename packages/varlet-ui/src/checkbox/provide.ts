import { ComputedRef } from 'vue'

export interface CheckboxProvider {
	checkedValue: ComputedRef<any>
	checked: ComputedRef<boolean>
	sync(values: Array<any>): void
}
