export const props = {
  // 加载状态
  loading: {
    type: Boolean,
    default: true,
  },
  // 段落行数
  rows: {
    type: Number,
    default: 0,
  },
  rowsWidth: {
    type: Array,
    default: () => [],
  },
  // 是否全屏
  fullscreen: {
    type: Boolean,
    default: false,
  },
  // 是否显示标题
  title: {
    type: Boolean,
    default: false,
  },
  // 标题宽度
  titleWidth: {
    type: String,
  },
  // 是否显示卡片
  card: {
    type: Boolean,
    default: false,
  },
  // 卡片高度
  cardHeight: {
    type: String,
  },
  // 是否显示头像
  avatar: {
    type: Boolean,
    default: false,
  },
  // 头像大小
  avatarSize: {
    type: String,
  },
}
