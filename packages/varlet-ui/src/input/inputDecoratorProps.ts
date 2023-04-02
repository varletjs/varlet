import type { PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

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
  size: {
    type: String as PropType<'small'>,
    validator: (size: string) => size === 'small',
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
  isFocus: {
    type: Boolean,
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
  hintPlaceholderState: {
    type: Boolean,
    default: false,
  },
  noHintPlaceholderState: {
    type: Boolean,
    default: false,
  },
  textarea: {
    type: Boolean,
    default: false,
  },
  onClick: defineListenerProp<(e: Event) => void>(),
  onClear: defineListenerProp<(value: string) => void>(),
}
