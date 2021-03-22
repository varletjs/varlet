export const props = {
  //  当前分数
  modelValue: {
    type: Number,
    default: 3,
  },
  'onUpdate:modelValue': {
    type: Function,
  },
  // 图标总数
  count: {
    type: Number,
    default: 5,
  },
  //  选中时的颜色
  color: {
    type: String,
    default: '#ff9800',
  },
  // 选中时图标样式
  icon: {
    type: String,
    default: 'star',
  },
  //  未选中的图标的颜色
  emptyColor: {
    type: String,
    default: '#bdbdbd',
  },
  //  未选中时图标样式
  emptyIcon: {
    type: String,
    default: 'star-outline',
  },
  // 图标大小
  size: {
    type: [String, Number],
    default: '20',
  },
  // 图标间隔
  marginRight: {
    type: [String, Number],
    default: '2',
  },

  //  是否使用半评分
  half: {
    type: Boolean,
    default: false,
  },
  // 选择一半时使用的图标
  halfIcon: {
    type: String,
    default: 'star-half-full',
  },
  //  是否禁用
  disabled: {
    type: Boolean,
    default: false,
  },
  // 禁用后的图标颜色
  disabledColor: {
    type: String,
    default: '#bdbdbd',
  },
  //  是否只读
  readonly: {
    type: Boolean,
    default: false,
  },
  //  点击时是否有水波纹样式
  ripple: {
    type: Boolean,
    default: false,
  },
  //  点击回调
  onChange: {
    type: Function,
  },
}
