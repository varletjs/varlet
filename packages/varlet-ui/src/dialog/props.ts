import { pickProps } from '../utils/components'
import { props as popupProps } from '../popup/props'

function messageAlignValidator(messageAlign: string): boolean {
	return ['left', 'right'].includes(messageAlign)
}

export const props = {
	// 开关
	show: {
		type: Boolean,
		default: false,
	},
	'onUpdate:show': {
		type: Function,
	},
	// 标题
	title: {
		type: String,
		default: '提示',
	},
	// 信息
	message: {
		type: String,
	},
	// 信息对齐方式
	messageAlign: {
		type: String,
		default: 'left',
		validator: messageAlignValidator,
	},
	// 显示确认按钮
	confirmButton: {
		type: Boolean,
		default: true,
	},
	// 显示取消按钮
	cancelButton: {
		type: Boolean,
		default: true,
	},
	// 确认按钮文案
	confirmButtonText: {
		type: String,
		default: '确定',
	},
	// 取消按钮文案
	cancelButtonText: {
		type: String,
		default: '取消',
	},
	// 确认按钮文字颜色
	confirmButtonColor: {
		type: String,
	},
	// 取消按钮文字颜色
	cancelButtonColor: {
		type: String,
	},
	// 确认按钮背景
	confirmButtonBackground: {
		type: String,
	},
	// 确认按钮背景
	cancelButtonBackground: {
		type: String,
	},
	// 关闭前回调函数
	onBeforeClose: {
		type: Function,
	},
	// 确认回调
	onConfirm: {
		type: Function,
	},
	// 取消回调
	onCancel: {
		type: Function,
	},
	...pickProps(popupProps, [
		'overlay',
		'overlayClass',
		'lockScroll',
		'closeOnClickOverlay',
		'teleport',
		'onOpen',
		'onClose',
		'onOpened',
		'onClosed',
		'onClickOverlay',
	]),
}
