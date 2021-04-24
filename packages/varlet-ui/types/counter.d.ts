import { VarComponent } from './varComponent'

export type ValidateTriggers = 'onIncrement' | 'onDecrement' | 'onInputChange' | 'onLazyChange'

interface CounterProps {
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
  validateTrigger?: Array<ValidateTriggers>
  rules?: Array<(v: number) => any>
  onBeforeChange?: (value: number, change: (value: string | number) => void) => void
  onChange?: (value: number) => void
  onIncrement?: (value: number) => void
  onDecrement?: (value: number) => void
  'onUpdate:modelValue'?: (value: number) => void
}

export class Counter extends VarComponent {
  $props: CounterProps

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}
