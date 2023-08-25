import { type PropType } from 'vue'

export type LoadingType = 'circle' | 'wave' | 'cube' | 'rect' | 'disappear'

export type LoadingSize = 'normal' | 'mini' | 'small' | 'large'

export const props = {
  type: {
    type: String as PropType<LoadingType>,
    default: 'circle',
  },
  radius: [String, Number],
  size: {
    type: String as PropType<LoadingSize>,
    default: 'normal',
  },
  color: String,
  description: String,
  loading: Boolean,
}
