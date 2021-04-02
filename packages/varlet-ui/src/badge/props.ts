function typeValidator(type: string): boolean {
  return ['default', 'primary', 'info', 'success', 'warning', 'danger'].includes(type)
}

function positionValidator(position: string): boolean {
  return ['right-top', 'right-bottom', 'left-top', 'left-bottom'].includes(position)
}

export const props = {
  // 徽标类型
  type: {
    type: String,
    default: 'default',
    validator: typeValidator,
  },
  // 是否隐藏徽标
  hidden: {
    type: Boolean,
    default: false,
  },
  // 是否是小圆点
  dot: {
    type: Boolean,
    default: false,
  },
  // 显示的值
  value: {
    type: [String, Number],
    default: 0,
  },
  // 显示最大值
  maxValue: {
    type: [String, Number],
  },
  // 自定义徽标颜色
  color: {
    type: String,
  },
  // 定位位置
  position: {
    type: String,
    validator: positionValidator,
  },
  // 图标
  icon: {
    type: String,
  },
}
