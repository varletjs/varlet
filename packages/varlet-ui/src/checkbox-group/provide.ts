import { ComputedRef } from 'vue'

export interface CheckboxGroupProvider {
	checkedCount: ComputedRef<number>
	max: ComputedRef<number | string | undefined>
	onChecked(value: any): void
	onUnchecked(value: any): void
}

export const CHECKBOX_GROUP_BIND_CHECKBOX_KEY = Symbol('CHECKBOX_GROUP_BIND_CHECKBOX_KEY')
export const CHECKBOX_GROUP_COUNT_CHECKBOX_KEY = Symbol('CHECKBOX_GROUP_COUNT_CHECKBOX_KEY')
