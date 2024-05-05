import { type PropType } from 'vue'
import { defineListenerProp, pickProps } from '../utils/components'
import { inputProps } from '../input'

export type OptInputValidateTrigger = 'onFocus' | 'onBlur' | 'onChange' | 'onClick' | 'onInput'

export const props = {
  modelValue: {
    type: [Number, String],
    default: undefined,
  },
  length: {
    type: Number,
    default: 6,
  },
  validateTrigger: {
    type: Array as PropType<OptInputValidateTrigger[]>,
    default: () => ['onInput'],
  },
  variant: {
    type: Boolean,
    default: false,
  },
  rules: Array as PropType<Array<(v: string) => any>>,
  onFocus: defineListenerProp<(i: number) => void>(),
  onBlur: defineListenerProp<(i: number) => void>(),
  onClick: defineListenerProp<(i: number) => void>(),
  onInput: defineListenerProp<(value: string) => void>(),
  onChange: defineListenerProp<(value: string) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: string) => void>(),
  ...pickProps(inputProps, [
    'size',
    'readonly',
    'autofocus',
    'disabled',
    'readonly',
    'textColor',
    'focusColor',
    'blurColor',
  ]),
}
