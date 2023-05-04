import type { PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export function sizeValidator(size: string) {
  return ['small', 'normal'].includes(size)
}

export function variantValidator(variant: string) {
  return ['outlined', 'standard'].includes(variant)
}

export const props = {
  value: {
    type: null,
    required: true,
  },
  id: {
    type: String,
    default: '',
  },
  isFocus: {
    type: Boolean,
  },
  size: {
    type: String as PropType<'small' | 'normal'>,
    default: 'normal',
    validator: sizeValidator,
  },
  variant: {
    type: String as PropType<'outlined' | 'standard'>,
    default: 'standard',
    validator: variantValidator,
  },
  placeholder: {
    type: String,
  },
  line: {
    type: Boolean,
    default: true,
  },
  hint: {
    type: Boolean,
    default: true,
  },
  textColor: {
    type: String,
  },
  focusColor: {
    type: String,
  },
  blurColor: {
    type: String,
  },
  errorMessage: {
    type: String,
  },
  formDisabled: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  cursor: {
    type: String,
  },
  composing: {
    type: Boolean,
    default: false,
  },
  alwaysCustomPlaceholder: {
    type: Boolean,
    default: true,
  },
  onClick: defineListenerProp<(e: Event) => void>(),
  onClear: defineListenerProp<(value: Event) => void>(),
}
