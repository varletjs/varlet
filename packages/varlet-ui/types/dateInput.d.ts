import { InputHTMLAttributes, VNode } from 'vue'
import {
  BasicAttributes,
  ListenerProp,
  Rules as DateInputRules,
  SetPropsDefaults,
  VarComponent,
  Variant as DateInputVariant,
} from './varComponent'

export declare const dateInputProps: Record<keyof DateInputProps, any>

export type DateInputType = 'date' | 'month' | 'year' | 'datetime'

export type DateInputValidateTrigger = 'onFocus' | 'onBlur' | 'onChange' | 'onClick' | 'onClear' | 'onInput'

export type DateInputValue = string | number | Date

export type DateInputValueFormat = 'timestamp' | 'date' | string

export type DateInputAllowedTimes = (value: string) => boolean

export interface DateInputProps extends BasicAttributes {
  modelValue?: DateInputValue | DateInputValue[]
  type?: DateInputType
  format?: string
  valueFormat?: DateInputValueFormat
  useSeconds?: boolean
  multiple?: boolean
  range?: boolean
  separator?: string
  rangeSeparator?: string
  placeholder?: string
  variant?: DateInputVariant
  size?: 'normal' | 'small'
  clearable?: boolean
  readonly?: boolean
  disabled?: boolean
  validateTrigger?: DateInputValidateTrigger[]
  rules?: DateInputRules
  allowedDates?: (value: string) => boolean
  allowedTimes?: DateInputAllowedTimes
  min?: string
  max?: string
  firstDayOfWeek?: string | number
  tabindex?: InputHTMLAttributes['tabindex']
  onFocus?: ListenerProp<(e: FocusEvent) => void>
  onBlur?: ListenerProp<(e: FocusEvent) => void>
  onChange?: ListenerProp<(value: DateInputValue | DateInputValue[] | undefined) => void>
  onClear?: ListenerProp<(value: string) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: DateInputValue | DateInputValue[] | undefined) => void>
}

export interface DateInputClearIconData {
  clear: (e: Event) => void
}

export class DateInput extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<DateInputProps>

  $props: DateInputProps

  $slots: {
    'prepend-icon'(): VNode[]
    'append-icon'(): VNode[]
    'clear-icon'(data: DateInputClearIconData): VNode[]
    'extra-message'(): VNode[]
  }

  focus(): void

  blur(): void

  select(): void

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _DateInputComponent extends DateInput {}
