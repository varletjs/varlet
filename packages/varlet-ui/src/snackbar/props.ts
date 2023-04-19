import { defineListenerProp, pickProps } from '../utils/components'
import { props as loadingProps } from '../loading/props'
import { SNACKBAR_TYPE, SnackbarType } from './index'
import type { PropType, TeleportProps } from 'vue'
import type { SlotType } from '.'

export function positionValidator(position: string): boolean {
  const validPositions = ['top', 'center', 'bottom']
  return validPositions.includes(position)
}

export function typeValidator(type: SnackbarType): boolean {
  return SNACKBAR_TYPE.includes(type)
}

export const props = {
  type: {
    type: String as PropType<SnackbarType>,
    validator: typeValidator,
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: 'top',
    validator: positionValidator,
  },
  // content内容
  content: {
    type: [String, Function, Object] as PropType<SlotType>,
  },
  // 为snackbar content添加自定义类名
  contentClass: {
    type: String,
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
  loadingType: pickProps(loadingProps, 'type'),
  loadingSize: pickProps(loadingProps, 'size'),
  loadingRadius: pickProps(loadingProps, 'radius'),
  loadingColor: {
    ...pickProps(loadingProps, 'color'),
    default: 'currentColor',
  },
  // 是否禁止滚动穿透
  lockScroll: {
    type: Boolean,
    default: false,
  },
  // 控制组件可见还是隐藏
  show: {
    type: Boolean,
    default: false,
  },
  // teleport
  teleport: {
    type: String as PropType<TeleportProps['to']>,
    default: 'body',
  },
  // 是否禁止点击背景
  forbidClick: {
    type: Boolean,
    default: false,
  },
  // 打开时的回调函数
  onOpen: defineListenerProp<() => void>(),
  // 打开动画结束时的回调
  onOpened: defineListenerProp<() => void>(),
  // 关闭时的回调函数
  onClose: defineListenerProp<() => void>(),
  // 关闭动画结束时的回调
  onClosed: defineListenerProp<() => void>(),
  'onUpdate:show': defineListenerProp<(show: boolean) => void>(),
  _update: {
    type: String,
  },
}
