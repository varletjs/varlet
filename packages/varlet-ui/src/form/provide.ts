import { ComputedRef } from 'vue'

export interface Validation {
	validate(): Promise<boolean>
	resetValidation(): void
	reset(): void
}

export interface FormProvider {
	disabled: ComputedRef<boolean>
	readonly: ComputedRef<boolean>
}

export const FORM_BIND_FORM_ITEM_KEY = Symbol('FORM_BIND_FORM_ITEM_KEY')
