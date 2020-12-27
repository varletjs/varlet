export const props = {
	modelValue: {
		type: Boolean,
	},
	// 是否禁用下拉刷新
	disable: {
		type: Boolean,
		default: false,
	},
	// 动画时长
	animationDuration: {
		type: [Number, String],
		default: 300,
	},
	// 刷新成功提示展示时长
	successDuration: {
		type: [Number, String],
		default: 2000,
	},

	onRefresh: {
		type: Function,
	},
}
