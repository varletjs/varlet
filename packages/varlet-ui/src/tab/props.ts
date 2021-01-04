export const props = {
	name: {
		type: [String, Number],
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	onClick: {
		type: Function,
	},
}
