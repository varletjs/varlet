import { ComputedRef } from 'vue'
import { Validation } from '../form/provide'

export interface CheckboxProvider extends Validation {
	checkedValue: ComputedRef<any>
	checked: ComputedRef<boolean>
	sync(values: Array<any>): void
}
