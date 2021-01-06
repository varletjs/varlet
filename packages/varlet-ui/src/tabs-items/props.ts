export const props = {
	active: {
		type: [String, Number],
		default: 0,
	},
	'onUpdate:active': {
		type: Function,
	},
}
