import { type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

type AllowedDates = (val: string) => boolean

type DatePickerType = 'year' | 'date' | 'month'

export type TouchDirection = 'x' | 'y'

export type Month = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12'

export type Week = '0' | '1' | '2' | '3' | '4' | '5' | '6'

export type ComponentProps = {
  type: string
  allowedDates: AllowedDates | undefined
  color: string | undefined
  firstDayOfWeek: string | number
  max: string | undefined
  min: string | undefined
  showCurrent: boolean
  multiple: boolean
  range: boolean
  buttonElevation: boolean | string | number
}

export type PanelBtnDisabled = {
  left: boolean
  right: boolean
}

export type Choose = {
  chooseMonth: Month | undefined
  chooseYear: string | undefined
  chooseDay: string | undefined
  chooseYears: Array<string>
  chooseMonths: Array<string>
  chooseDays: Array<string>
  chooseRangeYear: Array<string>
  chooseRangeMonth: Array<string>
  chooseRangeDay: Array<string>
}

export type Preview = {
  previewMonth?: Month
  previewYear: string
}

export const MONTH_LIST: Array<Month> = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

export const WEEK_HEADER: Array<Week> = ['0', '1', '2', '3', '4', '5', '6']

export const props = {
  modelValue: [String, Array] as PropType<string | Array<string>>,
  type: {
    type: String as PropType<DatePickerType>,
    default: 'date',
  },
  hint: String,
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
  readonly: Boolean,
  multiple: Boolean,
  range: Boolean,
  touchable: {
    type: Boolean,
    default: true,
  },
  onPreview: defineListenerProp<(year: number, month: number, day?: number) => void>(),
  onChange: defineListenerProp<(value: string | string[]) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: string | string[]) => void>(),
}
