import { Validation } from '../form/provide'

export interface RadioProvider extends Validation {
	sync(value: any): void
}
