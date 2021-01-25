import { ComputedRef } from 'vue'
import { Validation } from '../form/provide'

export interface CheckboxGroupProvider extends Validation {
	checkedCount: ComputedRef<number>
	errorMessage: ComputedRef<string>
	max: ComputedRef<number | string | undefined>
	onChecked(value: any): void
	onUnchecked(value: any): void
}

export const CHECKBOX_GROUP_BIND_CHECKBOX_KEY = Symbol('CHECKBOX_GROUP_BIND_CHECKBOX_KEY')
export const CHECKBOX_GROUP_COUNT_CHECKBOX_KEY = Symbol('CHECKBOX_GROUP_COUNT_CHECKBOX_KEY')
