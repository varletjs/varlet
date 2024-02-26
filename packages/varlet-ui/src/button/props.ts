import { loadingProps } from '../loading'
import { defineListenerProp, pickProps } from '../utils/components'
import { type ButtonHTMLAttributes, type PropType } from 'vue'

export type ButtonType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'

export type ButtonSize = 'normal' | 'mini' | 'small' | 'large'

export const props = {
  type: String as PropType<ButtonType>,
  nativeType: {
    type: String as PropType<ButtonHTMLAttributes['type']>,
    default: 'button',
  },
  size: String as PropType<ButtonSize>,
  loading: Boolean,
  round: Boolean,
  block: Boolean,
  text: Boolean,
  outline: Boolean,
  disabled: Boolean,
  autoLoading: Boolean,
  iconContainer: Boolean,
  ripple: {
    type: Boolean,
    default: true,
  },
  color: String,
  textColor: String,
  elevation: {
    type: [Boolean, Number, String],
    default: true,
  },
  loadingRadius: [Number, String],
  loadingType: pickProps(loadingProps, 'type'),
  loadingSize: pickProps(loadingProps, 'size'),
  loadingColor: {
    ...pickProps(loadingProps, 'color'),
    default: 'currentColor',
  },
  onClick: defineListenerProp<(e: Event) => void | Promise<any>>(),
  onTouchstart: defineListenerProp<(e: Event) => void | Promise<any>>(),
}
