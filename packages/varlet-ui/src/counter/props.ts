import type { PropType } from 'vue'

export type ValidateTriggers = 'onIncrement' | 'onDecrement' | 'onInputChange' | 'onLazyChange'

export const props = {
  modelValue: {
    type: [String, Number],
    default: 0,
  },
  min: {
    type: [String, Number],
  },
  max: {
    type: [String, Number],
  },
  step: {
    type: [String, Number],
    default: 1,
  },
  color: {
    type: String,
  },
  inputWidth: {
    type: [String, Number],
  },
  inputTextSize: {
    type: [String, Number],
  },
  buttonSize: {
    type: [String, Number],
  },
  decimalLength: {
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
  disableIncrement: {
    type: Boolean,
    default: false,
  },
  disableDecrement: {
    type: Boolean,
    default: false,
  },
  disableInput: {
    type: Boolean,
    default: false,
  },
  lazyChange: {
    type: Boolean,
    default: false,
  },
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
    type: Array as PropType<Array<ValidateTriggers>>,
    default: () => ['onInputChange', 'onLazyChange', 'onIncrement', 'onDecrement'],
  },
  rules: {
    type: Array as PropType<Array<(v: number) => any>>,
  },
  onBeforeChange: {
    type: Function as PropType<(value: number, change: (value: string | number) => void) => void>,
  },
  onChange: {
    type: Function as PropType<(value: number) => void>,
  },
  onIncrement: {
    type: Function as PropType<(value: number) => void>,
  },
  onDecrement: {
    type: Function as PropType<(value: number) => void>,
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: number) => void>,
  },
}
