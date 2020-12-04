function positionValidator(position: string): boolean {
  const validPositions = ['top', 'bottom', 'right', 'left', 'center']

  return validPositions.includes(position)
}

export const props = {
  // 开关
  show: {
    type: Boolean,
    default: false
  },
  // 弹出位置
  position: {
    type: String,
    default: 'center',
    validator: positionValidator
  },
  // 是否显示遮罩层
  overlay: {
    type: Boolean,
    default: true
  },
  // 遮罩层class名
  overlayClass: {
    type: String
  },
  // 遮罩层样式
  overlayStyle: {
    type: Object
  },
  // 是否禁止滚动穿透
  lockScroll: {
    type: Boolean,
    default: true
  },
  // 是否点击遮罩层关闭
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  },
  // teleport
  teleport: {
    default: 'body'
  }
}

export const emits = {
  'update:show': null,
  'open': null,
  'close': null,
  'opened': null,
  'closed': null,
  'click-overlay': null
}
