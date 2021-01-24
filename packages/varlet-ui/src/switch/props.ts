export const props = {
	modelValue: {
		type: Boolean,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	loading: {
		type: Boolean,
		default: false,
	},
	color: {
		type: String,
	},
	loadingColor: {
		type: String,
	},
	closeColor: {
		type: String,
	},
	size: {
		type: [String, Number],
		default: 20,
	},
	ripple: {
		type: Boolean,
		default: true,
	},
	onClick: {
		type: Function,
	},
	onChange: {
		type: Function,
	},
	'onUpdate:modelValue': {
		type: Function,
	},
}
