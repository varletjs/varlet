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
  //  中间内容
  title: {
    type: String,
    default: '标题',
  },

  //  中间标题的位置
  titlePosition: {
    type: String,
    default: 'left',
  },

  //  使用阴影层级
  shadow: {
    type: [Number, String],
    default: 3,
  },
}
