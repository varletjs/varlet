import { ComputedRef } from 'vue'
import { OptionProvider } from '../option/provide'
import { Validation } from '../form/provide'

export const SELECT_BIND_OPTION_KEY = Symbol('SELECT_BIND_OPTION_KEY')
export const SELECT_COUNT_OPTION_KEY = Symbol('SELECT_COUNT_OPTION_KEY')

export interface SelectProvider extends Validation {
	wrapWidth: ComputedRef<string>
	multiple: ComputedRef<boolean>
	activeColor: ComputedRef<string | undefined>
	onSelect(optionProvider: OptionProvider): void
}
