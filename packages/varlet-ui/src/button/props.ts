import { props as loadingProps } from '../loading/props'
import { defineListenerProp, pickProps } from '../utils/components'
import type { ButtonHTMLAttributes, PropType } from 'vue'

function typeValidator(type: string): boolean {
  return ['default', 'primary', 'info', 'success', 'warning', 'danger'].includes(type)
}

function sizeValidator(size: string): boolean {
  return ['normal', 'mini', 'small', 'large'].includes(size)
}

function nativeTypeValidator(nativeType: string): boolean {
  return ['button', 'reset', 'submit'].includes(nativeType)
}

export const props = {
  type: {
    type: String as PropType<'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'>,
    validator: typeValidator,
  },
  nativeType: {
    type: String as PropType<ButtonHTMLAttributes['type']>,
    default: 'button',
    validator: nativeTypeValidator,
  },
  size: {
    type: String as PropType<'normal' | 'mini' | 'small' | 'large'>,
    validator: sizeValidator,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  text: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  ripple: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
  },
  textColor: {
    type: String,
  },
  autoLoading: {
    type: Boolean,
    default: false,
  },
  loadingRadius: {
    type: [Number, String],
  },
  loadingType: pickProps(loadingProps, 'type'),
  loadingSize: pickProps(loadingProps, 'size'),
  loadingColor: {
    ...pickProps(loadingProps, 'color'),
    default: 'currentColor',
  },
  onClick: defineListenerProp<(e: Event) => void | Promise<any>>(),
  onTouchstart: defineListenerProp<(e: Event) => void | Promise<any>>(),
}
