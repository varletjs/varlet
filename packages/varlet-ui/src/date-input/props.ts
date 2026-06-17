import { type PropType } from 'vue'
import { props as inputProps } from '../input/props'
import { defineListenerProp, pickProps } from '../utils/components'

export type DateInputType = 'year' | 'month' | 'date'

export type DateInputValue = string | number | Date

export type DateInputValueFormat = 'timestamp' | 'date' | string

export const props = {
  modelValue: [String, Number, Date, Array] as PropType<DateInputValue | DateInputValue[]>,
  type: {
    type: String as PropType<DateInputType>,
    default: 'date',
  },
  format: String,
  valueFormat: {
    type: String as PropType<DateInputValueFormat>,
  },
  multiple: Boolean,
  range: Boolean,
  separator: {
    type: String,
    default: ', ',
  },
  rangeSeparator: {
    type: String,
    default: ' ~ ',
  },
  allowedDates: Function as PropType<(value: string) => boolean>,
  min: String,
  max: String,
  firstDayOfWeek: {
    type: [String, Number],
    default: 0,
  },
  readonly: Boolean,
  disabled: Boolean,
  clearable: Boolean,
  onFocus: defineListenerProp<(e: FocusEvent) => void>(),
  onBlur: defineListenerProp<(e: FocusEvent) => void>(),
  onChange: defineListenerProp<(value: DateInputValue | DateInputValue[]) => void>(),
  onClear: defineListenerProp<(value: string) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: DateInputValue | DateInputValue[]) => void>(),
  ...pickProps(inputProps, [
    'size',
    'variant',
    'placeholder',
    'line',
    'hint',
    'textColor',
    'focusColor',
    'blurColor',
    'rules',
    'tabindex',
    'validateTrigger',
  ]),
}
