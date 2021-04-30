export function positionValidator(position: string): boolean {
  const validPositions = ['left', 'center', 'right']
  return validPositions.includes(position)
}

export const props = {
  // 导航栏颜色
  color: {
    type: String,
    default: '#2979ff',
  },
  // 文字颜色
  textColor: {
    type: String,
    default: '#ffffff',
  },
  // 标题
  title: {
    type: String,
  },
  // 标题的位置
  titlePosition: {
    type: String,
    default: 'left',
    validator: positionValidator,
  },
  // 是否使用阴影
  elevation: {
    type: Boolean,
    default: true,
  },
}
