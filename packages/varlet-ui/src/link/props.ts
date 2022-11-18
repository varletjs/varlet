import type { PropType } from 'vue'

function typeValidator(type: string): boolean {
  return ['default', 'primary', 'info', 'success', 'warning', 'danger'].includes(type)
}

function underlineValidator(status: string): boolean {
  return ['always', 'hover', 'none'].includes(status)
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
    type: [String, Object] as PropType<string | Record<string, any>>,
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
  textSize: {
    type: [String, Number],
  },
  textColor: {
    type: String,
  },
  defaultStyle: {
    type: Boolean,
    default: false,
  },
  onClick: {
    type: Function as PropType<(e: Event) => void>,
  },
}
