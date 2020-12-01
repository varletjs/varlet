function typeValidator(type: string): boolean {
	const validTypes = ['wave', 'cube', 'rect', 'disappear']
	return validTypes.includes(type)
}

function sizeValidator(size: string): boolean {
	const validSizes = ['normal', 'mini', 'small', 'large']

	return validSizes.includes(size)
}

export const props = {
	// loading类型
	type: {
		type: String,
		default: 'wave',
		validator: typeValidator,
	},
	// loading尺寸
	size: {
		type: String,
		default: 'normal',
		validator: sizeValidator,
	},
	// loading颜色
	color: {
		type: String,
		default: 'currentColor',
	},
	// 文字颜色
	fontColor: {
		type: String,
		default: '#ccc',
	},
	// 字体大小
	fontSize: {
		type: Number,
		default: 14,
	},
	// 是否垂直排列图标和文字内容
	vertical: {
		type: Boolean,
		default: true,
	},
}
