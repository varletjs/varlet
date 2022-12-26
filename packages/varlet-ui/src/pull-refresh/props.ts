import type { PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type RefreshStatus = 'default' | 'pulling' | 'loosing' | 'loading' | 'success'

export const props = {
  modelValue: {
    type: Boolean,
  },
  // 是否禁用下拉刷新
  disabled: {
    type: Boolean,
    default: false,
  },
  // 动画时长
  animationDuration: {
    type: [Number, String],
    default: 300,
  },
  // 成功提示展示时长
  successDuration: {
    type: [Number, String],
    default: 2000,
  },
  // control 的背景颜色
  bgColor: {
    type: String,
  },
  // 成功状态下 control 的背景颜色
  successBgColor: {
    type: String,
  },
  // control 的颜色
  color: {
    type: String,
  },
  // 成功状态下 control 的颜色
  successColor: {
    type: String,
  },
  onRefresh: defineListenerProp<() => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: boolean) => void>(),
}
