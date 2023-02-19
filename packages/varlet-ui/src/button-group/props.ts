import type { PropType } from 'vue'

function typeValidator(type: string): boolean {
  return ['default', 'primary', 'info', 'success', 'warning', 'danger'].includes(type)
}

function sizeValidator(size: string): boolean {
  return ['normal', 'mini', 'small', 'large'].includes(size)
}

function modeValidator(mode: string): boolean {
  return ['normal', 'text', 'outline'].includes(mode)
}

export const props = {
  type: {
    type: String as PropType<'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'>,
    default: 'default',
    validator: typeValidator,
  },
  size: {
    type: String as PropType<'normal' | 'mini' | 'small' | 'large'>,
    default: 'normal',
    validator: sizeValidator,
  },
  color: {
    type: String,
  },
  mode: {
    type: String as PropType<'text' | 'outline' | 'normal'>,
    default: 'normal',
    validator: modeValidator,
  },
  elevation: {
    type: [Number, String],
    default: 2,
  },
  vertical: {
    type: Boolean,
    default: false,
  },
}
