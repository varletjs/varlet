import { PropType } from 'vue'

export function textAlignValidator(textAlign: string) {
	return ['left', 'right', 'center'].includes(textAlign)
}

export function typeValidator(type: string) {
	return ['text', 'password'].includes(type)
}

export type ValidateTriggers = 'onFocus' | 'onBlur' | 'onChange' | 'onClick' | 'onClear' | 'onInput'

export const props = {
	modelValue: {
		type: [String, Number],
	},
	textColor: {
		type: String,
	},
	inactiveColor: {
		type: String,
	},
	activeColor: {
		type: String,
	},
	type: {
		type: String,
		default: 'text',
		validator: typeValidator,
	},
	maxlength: {
		type: [String, Number],
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	readonly: {
		type: Boolean,
		default: false,
	},
	clearable: {
		type: Boolean,
		default: false,
	},
	textarea: {
		type: Boolean,
		default: false,
	},
	resize: {
		type: Boolean,
		default: false,
	},
	rows: {
		type: [String, Number],
		default: 8,
	},
	textAlign: {
		type: String,
		default: 'left',
		validator: textAlignValidator,
	},
	placeholder: {
		type: String,
	},
	prependIcon: {
		type: String,
	},
	appendIcon: {
		type: String,
	},
	line: {
		type: Boolean,
		default: true,
	},
	hint: {
		type: Boolean,
		default: true,
	},
	validateTrigger: {
		type: Array as PropType<Array<ValidateTriggers>>,
		default: ['onInput', 'onClear'],
	},
	rules: {
		type: Array as PropType<Array<(v: string | number | undefined) => any>>,
	},
	onFocus: {
		type: Function,
	},
	onBlur: {
		type: Function,
	},
	onInput: {
		type: Function,
	},
	onChange: {
		type: Function,
	},
	onClick: {
		type: Function,
	},
	onClear: {
		type: Function,
	},
	onClickAppendIcon: {
		type: Function,
	},
	onClickPrependIcon: {
		type: Function,
	},
	'onUpdate:modelValue': {
		type: Function,
	},
}
