import { ComputedRef } from 'vue'
import { pickProps } from '../utils/components'
import { props as stickyProps } from '../sticky/props'

export interface TabMessage {
	name: ComputedRef<number | string | undefined>
	index: ComputedRef<number>
	element: HTMLElement | null
}

export interface TabsProvider {
	active: ComputedRef<number | string>
	activeColor: ComputedRef<string | undefined>
	inactiveColor: ComputedRef<string | undefined>
	disabledColor: ComputedRef<string | undefined>
	direction: ComputedRef<string>
	receiveTabMessage(tabMessage: TabMessage): void
	clearTabMessage(tabMessage: TabMessage): void
	onTabClick(tabMessage: TabMessage): void
}

export const TABS_PROVIDER_KEY = Symbol('TABS_PROVIDER_KEY')
export const TAB_COUNTER_KEY = Symbol('TAB_COUNTER_KEY')

export const props = {
	// 活动标签标识
	active: {
		type: [String, Number],
		default: 0,
	},
	'onUpdate:active': {
		type: Function,
	},
	// 排列方向
	direction: {
		type: String,
		default: 'horizontal',
	},
	// 激活颜色
	activeColor: {
		type: String,
	},
	// 未激活颜色
	inactiveColor: {
		type: String,
	},
	// 禁用颜色
	disabledColor: {
		type: String,
	},
	// 标签背景
	background: {
		type: String,
	},
	// 指示器背景
	indicatorBackground: {
		type: String,
	},
	// 指示器大小
	indicatorSize: {
		type: String,
	},
	// 阴影深度
	elevation: {
		type: Number,
		default: 0,
	},
	// 开启粘性
	sticky: {
		type: Boolean,
		default: false,
	},
	// 粘性位置
	offsetTop: pickProps(stickyProps, 'offsetTop'),
	// 点击标签事件
	onClick: {
		type: Function,
	},
	// 激活标签切换事件
	onChange: {
		type: Function,
	},
}
