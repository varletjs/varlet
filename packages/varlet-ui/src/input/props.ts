import { PropType } from 'vue'

export function typeValidator(type: string) {
  return ['text', 'password'].includes(type)
}

export type ValidateTriggers = 'onFocus' | 'onBlur' | 'onChange' | 'onClick' | 'onClear' | 'onInput'

export const props = {
  modelValue: {
    type: [String, Number],
  },
  type: {
    type: String as PropType<'text' | 'password'>,
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
  validateTrigger: {
    type: Array as PropType<ValidateTriggers[]>,
    default: ['onInput', 'onClear'],
  },
  rules: {
    type: Array as PropType<Array<(v: string | number) => any>>,
  },
  onFocus: {
    type: Function as PropType<(e: Event) => void>,
  },
  onBlur: {
    type: Function as PropType<(e: Event) => void>,
  },
  onClick: {
    type: Function as PropType<(e: Event) => void>,
  },
  onClear: {
    type: Function as PropType<(value: string | number) => void>,
  },
  onInput: {
    type: Function as PropType<(value: string | number, e: Event) => void>,
  },
  onChange: {
    type: Function as PropType<(value: string | number, e: Event) => void>,
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: string | number) => void>,
  },
}
