import { type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type ValidateTrigger = 'onIncrement' | 'onDecrement' | 'onInputChange' | 'onLazyChange'

export const props = {
  modelValue: {
    type: [String, Number],
    default: 0,
  },
  min: [String, Number],
  max: [String, Number],
  step: {
    type: [String, Number],
    default: 1,
  },
  color: String,
  inputWidth: [String, Number],
  inputTextSize: [String, Number],
  buttonSize: [String, Number],
  elevation: {
    type: [Boolean, Number, String],
    default: true,
  },
  decimalLength: [String, Number],
  disabled: Boolean,
  readonly: Boolean,
  disableIncrement: Boolean,
  disableDecrement: Boolean,
  disableInput: Boolean,
  lazyChange: Boolean,
  incrementButton: {
    type: Boolean,
    default: true,
  },
  decrementButton: {
    type: Boolean,
    default: true,
  },
  press: {
    type: Boolean,
    default: true,
  },
  ripple: {
    type: Boolean,
    default: true,
  },
  validateTrigger: {
    type: Array as PropType<Array<ValidateTrigger>>,
    default: () => ['onInputChange', 'onLazyChange', 'onIncrement', 'onDecrement'],
  },
  rules: Array as PropType<Array<(v: number) => any>>,
  onBeforeChange: defineListenerProp<(value: number, change: (value: string | number) => void) => void>(),
  onChange: defineListenerProp<(value: number) => void>(),
  onIncrement: defineListenerProp<(value: number) => void>(),
  onDecrement: defineListenerProp<(value: number) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: number) => void>(),
}
