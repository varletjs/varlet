export const props = {
	modelValue: {
		default: false,
	},
	disabled: {
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
