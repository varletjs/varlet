import { props as loadingProps } from '../loading/propsEmits'
import { pickProps } from '../utils/components'

function typeValidator(type: string): boolean {
  return ['plain', 'primary', 'info', 'success', 'warning', 'danger'].includes(type)
}

function sizeValidator(size: string): boolean {
  return ['normal', 'mini', 'small', 'large'].includes(size)
}

export const props = {
  // 按钮类型
  type: {
    type: String,
    default: 'plain',
    validator: typeValidator
  },
  // 按钮尺寸
  size: {
    type: String,
    default: 'normal',
    validator: sizeValidator
  },
  // 加载状态
  loading: {
    type: Boolean,
    default: false
  },
  // 加载动画类型
  loadingType: pickProps(loadingProps, 'type'),
  // 加载动画尺寸
  loadingSize: pickProps(loadingProps, 'size'),
  // 圆型按钮
  round: {
    type: Boolean,
    default: false
  },
  // 块级元素
  block: {
    type: Boolean,
    default: false
  },
  // 禁用按钮
  disabled: {
    type: Boolean,
    default: false
  },
  // 按钮文字颜色
  color: {
    type: String
  },
  // 按钮背景颜色
  background: {
    type: String
  }
}

export const emits = {
  click: null
}
