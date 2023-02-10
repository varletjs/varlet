import type { PropType } from 'vue'
import { defineListenerProp, pickProps } from '../utils/components'
import { props as inputBoxProps } from './inputBoxProps'

export type InputType = 'text' | 'password' | 'number' | 'tel' | 'email'

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
    type: String as PropType<InputType>,
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
  maxlength: {
    type: [String, Number],
  },
  readonly: {
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
  onInput: defineListenerProp<(value: string, e: Event) => void>(),
  onChange: defineListenerProp<(value: string, e: Event) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: string) => void>(),
  // dynamic internal
  ...pickProps(inputBoxProps, [
    'size',
    'variant',
    'placeholder',
    'line',
    'hint',
    'textColor',
    'focusColor',
    'blurColor',
    'disabled',
    'clearable',
    'onClick',
    'onClear',
  ]),
}
