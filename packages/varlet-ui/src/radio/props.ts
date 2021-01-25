import { PropType } from 'vue'

export type ValidateTriggers = 'onChange'

export const props = {
	modelValue: {
		default: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	readonly: {
		type: Boolean,
		default: false,
	},
	checkedValue: {
		default: true,
	},
	uncheckedValue: {
		default: false,
	},
	checkedColor: {
		type: String,
	},
	uncheckedColor: {
		type: String,
	},
	iconSize: {
		type: String,
	},
	ripple: {
		type: Boolean,
		default: true,
	},
	validateTrigger: {
		type: Array as PropType<Array<ValidateTriggers>>,
		default: ['onChange'],
	},
	rules: {
		type: Array as PropType<Array<(v: any) => any>>,
	},
	'onUpdate:modelValue': {
		type: Function,
	},
	onChange: {
		type: Function,
	},
	onClick: {
		type: Function,
	},
}
