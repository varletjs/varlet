export const props = {
  // 导航栏颜色
  color: {
    type: String,
  },
  //  文字颜色
  textColor: {
    type: String,
  },
  //  中间内容
  title: {
    type: String,
    default: '标题',
  },
  //  是否固定在顶部
  fixed: {
    type: Boolean,
    default: true,
  },
}
