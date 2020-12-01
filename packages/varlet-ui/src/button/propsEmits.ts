function typeValidator(type: string): boolean {
  const validTypes = ['plain', 'primary', 'info', 'success', 'warning', 'danger']

  return validTypes.includes(type)
}

function sizeValidator(size: string): boolean {
  const validSizes = ['normal', 'mini', 'small', 'large']

  return validSizes.includes(size)
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
  // 原型按钮
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

export const emits = ['click']
