function alignmentValidator(alignment: string) {
	return ['top', 'bottom'].includes(alignment)
}

export const props = {
	show: {
		type: Boolean,
		default: false,
	},
	'onUpdate:show': {
		type: Function,
	},
	alignment: {
		type: String,
		default: 'top',
		validator: alignmentValidator,
	},
	offsetX: {
		type: String,
		default: '0px',
	},
	offsetY: {
		type: String,
		default: '0px',
	},
	onBlur: {
		type: Function,
	},
}
