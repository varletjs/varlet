import { InputHTMLAttributes, type PropType } from 'vue'
import { fieldDecoratorProps } from '../field-decorator'
import { defineListenerProp, pickProps } from '../utils/components'

export type InputType = 'text' | 'password' | 'number' | 'tel' | 'email'

export type InputValidateTrigger = 'onFocus' | 'onBlur' | 'onChange' | 'onClick' | 'onClear' | 'onInput'

export const props = {
  modelValue: String,
  modelModifiers: {
    type: Object as PropType<{ trim?: boolean }>,
    default: () => ({}),
  },
  type: {
    type: String as PropType<InputType>,
    default: 'text',
  },
  textarea: Boolean,
  ariaLabel: String,
  rows: {
    type: [String, Number],
    default: 8,
  },
  maxlength: [String, Number],
  readonly: Boolean,
  resize: Boolean,
  autofocus: Boolean,
  validateTrigger: {
    type: Array as PropType<InputValidateTrigger[]>,
    default: () => ['onInput', 'onClear'],
  },
  rules: [Array, Function, Object] as PropType<any>,
  enterkeyhint: String as PropType<InputHTMLAttributes['enterKeyHint']>,
  onFocus: defineListenerProp<(e: FocusEvent) => void>(),
  onBlur: defineListenerProp<(e: FocusEvent) => void>(),
  onInput: defineListenerProp<(value: string, e: Event) => void>(),
  onChange: defineListenerProp<(value: string, e: Event) => void>(),
  onClear: defineListenerProp<(value: string) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: string) => void>(),
  ...pickProps(fieldDecoratorProps, [
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
  ]),
  // internal start
  autocomplete: String,
  isForceFocusingEffect: {
    type: Boolean,
    default: undefined,
  },
  isForceErrorEffect: {
    type: Boolean,
    default: undefined,
  },
  isShowFormDetails: {
    type: Boolean,
    default: true,
  },
  // internal end
}
