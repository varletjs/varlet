export const props = {
  // 导航栏颜色
  color: {
    type: String,
    default: '#2979ff',
  },
  //  文字颜色
  textColor: {
    type: String,
    default: '#ffffff',
  },
  //  标题
  title: {
    type: String,
  },

  //  标题的位置
  titlePosition: {
    type: String,
    default: 'left',
  },

  //  是否使用阴影
  isShadow: {
    type: Boolean,
    default: true,
  },
}
