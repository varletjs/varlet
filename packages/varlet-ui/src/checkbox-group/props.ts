import { PropType } from 'vue'

export function directionValidator(direction: string) {
	return ['horizontal', 'vertical'].includes(direction)
}

export const props = {
	modelValue: {
		type: Array as PropType<Array<any>>,
		default: [],
	},
	max: {
		type: [String, Number],
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
