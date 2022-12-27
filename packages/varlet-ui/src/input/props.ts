import type { PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export function typeValidator(type: string) {
  return ['text', 'password', 'number'].includes(type)
}

export type InputValidateTrigger = 'onFocus' | 'onBlur' | 'onChange' | 'onClick' | 'onClear' | 'onInput'

export const props = {
  modelValue: {
    type: String,
  },
  modelModifiers: {
    type: Object as PropType<{ trim?: boolean }>,
    default: () => ({}),
  },
  type: {
    type: String as PropType<'text' | 'password' | 'number' | 'tel' | 'email'>,
    default: 'text',
    validator: typeValidator,
  },
  textarea: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: [String, Number],
    default: 8,
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
  maxlength: {
    type: [String, Number],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  resize: {
    type: Boolean,
    default: false,
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
  validateTrigger: {
    type: Array as PropType<InputValidateTrigger[]>,
    default: () => ['onInput', 'onClear'],
  },
  rules: {
    type: Array as PropType<Array<(v: string) => any>>,
  },
  onFocus: defineListenerProp<(e: FocusEvent) => void>(),
  onBlur: defineListenerProp<(e: FocusEvent) => void>(),
  onClick: defineListenerProp<(e: Event) => void>(),
  onClear: defineListenerProp<(value: string) => void>(),
  onInput: defineListenerProp<(value: string, e: Event) => void>(),
  onChange: defineListenerProp<(value: string, e: Event) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: string) => void>(),
}
