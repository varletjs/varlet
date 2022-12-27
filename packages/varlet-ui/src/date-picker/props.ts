import type { PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

type AllowedDates = (val: string) => boolean

type DatePickerType = 'date' | 'month'

export type TouchDirection = 'x' | 'y'

export type Month = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12'

export type Week = '0' | '1' | '2' | '3' | '4' | '5' | '6'

function typeValidator(type: string): boolean {
  return ['date', 'month'].includes(type)
}

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
}

export type MonthDict = {
  index: Month
}

export type WeekDict = {
  index: Week
}

export type PanelBtnDisabled = {
  left: boolean
  right: boolean
}

export type Choose = {
  chooseMonth: MonthDict | undefined
  chooseYear: string | undefined
  chooseDay: string | undefined
  chooseMonths: Array<string>
  chooseDays: Array<string>
  chooseRangeMonth: Array<string>
  chooseRangeDay: Array<string>
}

export type Preview = {
  previewMonth: MonthDict
  previewYear: string
}

export const MONTH_LIST: Array<MonthDict> = [
  {
    index: '01',
  },
  {
    index: '02',
  },
  {
    index: '03',
  },
  {
    index: '04',
  },
  {
    index: '05',
  },
  {
    index: '06',
  },
  {
    index: '07',
  },
  {
    index: '08',
  },
  {
    index: '09',
  },
  {
    index: '10',
  },
  {
    index: '11',
  },
  {
    index: '12',
  },
]

export const WEEK_HEADER: Array<WeekDict> = [
  {
    index: '0',
  },
  {
    index: '1',
  },
  {
    index: '2',
  },
  {
    index: '3',
  },
  {
    index: '4',
  },
  {
    index: '5',
  },
  {
    index: '6',
  },
]

export const props = {
  modelValue: {
    type: [String, Array] as PropType<string | Array<string>>,
  },
  type: {
    type: String as PropType<DatePickerType>,
    default: 'date',
    validator: typeValidator,
  },
  allowedDates: {
    type: Function as PropType<AllowedDates>,
  },
  color: {
    type: String,
  },
  headerColor: {
    type: String,
  },
  elevation: {
    type: Boolean,
    default: false,
  },
  firstDayOfWeek: {
    type: [String, Number],
    default: 0,
  },
  min: {
    type: String,
  },
  max: {
    type: String,
  },
  showCurrent: {
    type: Boolean,
    default: true,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  range: {
    type: Boolean,
    default: false,
  },
  touchable: {
    type: Boolean,
    default: true,
  },
  onPreview: defineListenerProp<(year: number, month: number) => void>(),
  onChange: defineListenerProp<(value: string | string[]) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: string | string[]) => void>(),
}
