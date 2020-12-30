import { isPx, isRem } from '../utils/elements'

function offsetTopValidator(offsetTop: string | number): boolean {
	return isPx(offsetTop) || isRem(offsetTop)
}

export const props = {
	offsetTop: {
		type: [String, Number],
		validator: offsetTopValidator,
		default: 0,
	},
	zIndex: {
		type: Number,
		default: 10,
	},
	onScroll: {
		type: Function,
	},
}
