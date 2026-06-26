import { type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'
import { DatePickerTypes } from './constants'
import { type AllowedDates } from './types'

export type { DatePickerTypes, Month, Week } from './constants'
export type { AllowedDates, DatePickerSelectionState, PanelDatePickerProps, DatePickerPreviewState } from './types'

export const props = {
  modelValue: [String, Array] as PropType<string | Array<string>>,
  type: {
    type: String as PropType<DatePickerTypes>,
    default: DatePickerTypes.Date,
  },
  hint: String,
  fallbackViewDate: String,
  allowedDates: Function as PropType<AllowedDates>,
  color: String,
  titleColor: String,
  elevation: {
    type: [Boolean, Number, String],
    default: false,
  },
  buttonElevation: {
    type: [Boolean, Number, String],
    default: true,
  },
  firstDayOfWeek: {
    type: [String, Number],
    default: 0,
  },
  min: String,
  max: String,
  showCurrent: {
    type: Boolean,
    default: true,
  },
  showTitle: {
    type: Boolean,
    default: true,
  },
  readonly: Boolean,
  multiple: Boolean,
  range: Boolean,
  onPreview: defineListenerProp<(year: number, month: number, dayOfMonth?: number) => void>(),
  onChange: defineListenerProp<(value: string | string[]) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: string | string[]) => void>(),
}
