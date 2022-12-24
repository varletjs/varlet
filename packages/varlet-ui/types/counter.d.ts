import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'

export type CounterValidateTrigger = 'onIncrement' | 'onDecrement' | 'onInputChange' | 'onLazyChange'

export interface CounterProps extends BasicAttributes {
  modelValue?: string | number
  min?: string | number
  max?: string | number
  step?: string | number
  color?: string
  inputWidth?: string | number
  inputTextSize?: string | number
  buttonSize?: string | number
  decimalLength?: string | number
  disabled?: boolean
  readonly?: boolean
  disableIncrement?: boolean
  disableDecrement?: boolean
  disableInput?: boolean
  lazyChange?: boolean
  incrementButton?: boolean
  decrementButton?: boolean
  press?: boolean
  ripple?: boolean
  validateTrigger?: Array<CounterValidateTrigger>
  rules?: Array<(v: number) => any>
  onBeforeChange?: ListenerProp<(value: number, change: (value: string | number) => void) => void>
  onChange?: ListenerProp<(value: number) => void>
  onIncrement?: ListenerProp<(value: number) => void>
  onDecrement?: ListenerProp<(value: number) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: number) => void>
}

export class Counter extends VarComponent {
  $props: CounterProps

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _CounterComponent extends Counter {}
