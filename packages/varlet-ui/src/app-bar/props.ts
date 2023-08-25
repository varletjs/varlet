import { type PropType } from 'vue'

export type AppBarTitlePosition = 'left' | 'center' | 'right'

export const props = {
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
}
