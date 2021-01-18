export function directionValidator(direction: string) {
	return ['horizontal', 'vertical'].includes(direction)
}

export const props = {
	modelValue: {
		default: false,
	},
	direction: {
		type: String,
		default: 'horizontal',
	},
	onChange: {
		type: Function,
	},
	'onUpdate:modelValue': {
		type: Function,
	},
}
