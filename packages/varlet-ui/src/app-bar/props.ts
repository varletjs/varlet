import { type PropType } from 'vue'

export type AppBarTitlePosition = 'left' | 'center' | 'right'

export type AppBarType = 'primary' | 'surface'

export type AppBarSize = 'normal' | 'large'

export const props = {
  type: {
    type: String as PropType<AppBarType>,
    default: 'primary',
  },
  size: {
    type: String as PropType<AppBarSize>,
    default: 'normal',
  },
  color: String,
  textColor: String,
  title: String,
  titlePosition: {
    type: String as PropType<AppBarTitlePosition>,
    default: 'left',
  },
  elevation: {
    type: [Boolean, String, Number],
    default: true,
  },
  round: Boolean,
  image: String,
  imageLinearGradient: String,
  safeAreaTop: Boolean,
  border: Boolean,
  zIndex: {
    type: [Number, String] as PropType<number | string>,
    default: 1,
  },
  fixed: Boolean,
  placeholder: Boolean,
}
