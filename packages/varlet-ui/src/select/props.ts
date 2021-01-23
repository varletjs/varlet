import { PropType } from 'vue'

export function textAlignValidator(textAlign: string) {
	return ['left', 'right', 'center'].includes(textAlign)
}

export type ValidateTriggers = 'onFocus' | 'onBlur' | 'onChange' | 'onClick' | 'onClear'

export const props = {
	modelValue: {
		type: [String, Number, Boolean, Array] as PropType<string | number | boolean | undefined | Array<any>>,
		default: undefined,
	},
	textColor: {
		type: String,
	},
	activeColor: {
		type: String,
	},
	inactiveColor: {
		type: String,
	},
	multiple: {
		type: Boolean,
		default: false,
	},
	chip: {
		type: Boolean,
		default: false,
	},
	separator: {
		type: String,
		default: ',',
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
		default: ['onChange', 'onClear'],
	},
	rules: {
		type: Array as PropType<Array<(v: string | number | boolean | Array<any> | undefined) => any>>,
	},
	onFocus: {
		type: Function,
	},
	onBlur: {
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
	onClose: {
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
