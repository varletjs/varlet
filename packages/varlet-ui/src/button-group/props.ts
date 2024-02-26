import { type PropType } from 'vue'

export type ButtonGroupType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'

export type ButtonGroupSize = 'normal' | 'mini' | 'small' | 'large'

export type ButtonMode = 'text' | 'outline' | 'normal' | 'icon-container'

export const props = {
  type: {
    type: String as PropType<ButtonGroupType>,
    default: 'default',
  },
  size: {
    type: String as PropType<ButtonGroupSize>,
    default: 'normal',
  },
  color: String,
  textColor: String,
  mode: {
    type: String as PropType<ButtonMode>,
    default: 'normal',
  },
  elevation: {
    type: [Boolean, Number, String],
    default: true,
  },
  vertical: Boolean,
}
