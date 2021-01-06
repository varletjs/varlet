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
	// control 的背景颜色
	bgColor: {
		type: String,
		default: '#fff',
	},
	// 成功状态下 control 的背景颜色
	successBgColor: {
		type: String,
		default: '#fff',
	},
	// control 的颜色
	color: {
		type: String,
		default: '#005CAF',
	},
	// 成功状态下 control 的颜色
	successColor: {
		type: String,
		default: '#4CAF50',
	},
	onRefresh: {
		type: Function,
	},
}
