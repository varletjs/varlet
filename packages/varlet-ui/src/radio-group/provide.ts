export interface RadioGroupProvider {
	onToggle(value: any): void
}

export const RADIO_GROUP_BIND_RADIO_KEY = Symbol('RADIO_GROUP_BIND_RADIO_KEY')
export const RADIO_GROUP_COUNT_RADIO_KEY = Symbol('RADIO_GROUP_COUNT_RADIO_KEY')
