import type { PropType } from 'vue'

function typeValidator(type: string): boolean {
  return ['default', 'primary', 'info', 'success', 'warning', 'danger'].includes(type)
}

function underlineValidator(size: string): boolean {
  return ['always', 'hover', 'none'].includes(size)
}

export const props = {
  type: {
    type: String as PropType<'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'>,
    default: 'default',
    validator: typeValidator,
  },
  href: {
    type: String,
  },
  target: {
    type: String,
  },
  to: {
    type: String,
  },
  replace: {
    type: Boolean,
    default: false,
  },
  underline: {
    type: String as PropType<'always' | 'hover' | 'none'>,
    default: 'always',
    validator: underlineValidator,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  textColor: {
    type: String,
  },
  defaultStyle: {
    type: Boolean,
    default: false,
  },
}
