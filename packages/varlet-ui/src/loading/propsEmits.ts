export function typeValidator(type: string): boolean {
	const validTypes = ['wave', 'cube', 'rect', 'disappear']
	return validTypes.includes(type)
}

export function sizeValidator(size: string): boolean {
	const validSizes = ['normal', 'mini', 'small', 'large']

	return validSizes.includes(size)
}

export const getTypeDefault = () => 'wave'

export const getSizeDefault = () => 'normal'

export const props = {
	// loading类型
	type: {
		type: String,
		default: getTypeDefault,
		validator: typeValidator,
	},
	// loading尺寸
	size: {
		type: String,
		default: getSizeDefault,
		validator: sizeValidator,
	},
	// loading颜色
	color: {
		type: String,
		default: 'currentColor',
	},
}
