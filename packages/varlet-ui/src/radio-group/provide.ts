import { ComputedRef } from 'vue'
import { Validation } from '../form/provide'

export interface RadioGroupProvider extends Validation {
	onToggle(value: any): void
	errorMessage: ComputedRef<string>
}

export const RADIO_GROUP_BIND_RADIO_KEY = Symbol('RADIO_GROUP_BIND_RADIO_KEY')
export const RADIO_GROUP_COUNT_RADIO_KEY = Symbol('RADIO_GROUP_COUNT_RADIO_KEY')
