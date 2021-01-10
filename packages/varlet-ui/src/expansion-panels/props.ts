import { PropType } from 'vue'

export const props = {
	modelValue: {
		type: [Array, String, Number] as PropType<string | number | Array<string | number>>,
	},
	accordion: {
		type: Boolean,
		default: false,
	},
	onChange: {
		type: Function,
	},
	'onUpdate:modelValue': {
		type: Function,
	},
}
