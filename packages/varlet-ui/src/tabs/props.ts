import { pickProps } from '../utils/components'
import { props as stickyProps } from '../sticky/props'

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
  layoutDirection: {
    type: String,
    default: 'horizontal',
  },
  // 内容排列方向
  itemDirection: {
	  type: String,
    default: 'horizontal'
  },
  // 底部固定
  fixedBottom: {
    type: Boolean,
    default: false,
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
  color: {
    type: String,
  },
  // 指示器背景
  indicatorColor: {
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
