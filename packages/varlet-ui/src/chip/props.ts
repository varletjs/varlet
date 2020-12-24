// import { pickProps } from '../utils/components'
// import {props as iconProps} from '../icon/props'

function typeValidator(type: string): boolean {
  return ['plain', 'primary', 'info', 'success', 'warning', 'danger'].includes(type)
}

function sizeValidator(size: string): boolean {
  return ['normal', 'mini', 'small', 'large'].includes(size)
}

export const props = {
//  标签类型
  type: {
    type: String,
    default: 'plain',
    validator: typeValidator
  },
//  标签尺寸
  size: {
    type: String,
    default: 'normal',
    validator: sizeValidator
  },
//  是否使用水波纹
  disabled: {
    type: Boolean,
    default: true
  },
//  是否空心
  hollow: {
    type: Boolean,
    default: false
  },
//  标签文字颜色
  color: {
    type: String
  },
//  是否使用圆形标签
  round: {
    type: Boolean,
    default: false
  },
//  是否是块级元素
  block: {
    type: Boolean,
    default: false
  },
//  背景颜色
  background: {
    type: String
  },
//  是否使用图标
  icon: {
    type: Boolean,
    default: false
  },
//  是否可关闭
  paralyse: {
    type: Boolean,
    default: false
  },
//  字体颜色
  textcolor: {
    type: String
  },
//  图标样式
//   iconType:pickProps(iconProps,'type'),
//  图标大小
//   iconSize:pickProps(iconProps,'size'),
  closeIcon: {
    type: String
  },
//  取消回调
  onClose: {
    type: Function
  }
}

