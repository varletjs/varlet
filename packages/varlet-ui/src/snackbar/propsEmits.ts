import { pickProps } from '../utils/components'
import { props as loadingProps } from '../loading/propsEmits'

export function positionValidator(type: string): boolean {
	const validPositions = ['top', 'center', 'bottom']
	return validPositions.includes(type)
}

export function typeValidator(type: string): boolean {
	const validPositions = ['loading', 'success', 'warning', 'info', 'error']
	return validPositions.includes(type)
}

export const getPositionDefault = () => 'top'

export const props = {
	type: {
		type: String,
		validator: typeValidator,
	},
	// snackbar显示的位置
	position: {
		type: String,
		default: getPositionDefault,
		validator: positionValidator,
	},
	// content内容
	content: {
		type: String,
	},
	// 为snackbar content添加自定义类名
	contentClass: {
		type: String,
	},
	// snackbar的高度
	height: {
		type: [Number, String],
	},
	// snackbar的宽度
	width: {
		type: [Number, String],
	},
	// snackbar的背景颜色
	color: {
		type: String,
		default: '#333',
	},
	// snackbar 持续时间
	duration: {
		type: Number,
		default: 3000,
	},
	// 是否将消息条内容堆叠在操作（按钮）之上
	vertical: {
		type: Boolean,
		default: false,
	},
	// 加载动画类型
	loadingType: pickProps(loadingProps, 'type'),
	// 加载动画尺寸
	loadingSize: pickProps(loadingProps, 'size'),
	// 是否禁止滚动穿透
	lockScroll: {
		type: Boolean,
		default: true,
	},
	// 控制组件可见还是隐藏
	show: {
		type: Boolean,
		default: false,
	},
	// teleport
	teleport: {
		default: 'body',
	},
	// 是否禁止点击背景
	forbidClick: {
		type: Boolean,
		default: false,
	},
	// 打开时的回调函数
	onOpen: {
		type: Function,
		default: () => {},
	},
	// 打开动画结束时的回调
	onOpened: {
		type: Function,
		default: () => {},
	},
	// 关闭时的回调函数
	onClose: {
		type: Function,
		default: () => {},
	},
	// 关闭动画结束时的回调
	onClosed: {
		type: Function,
		default: () => {},
	},
	_update: {
		type: String,
	},
}
