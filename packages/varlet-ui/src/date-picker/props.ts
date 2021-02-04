import { PropType } from 'vue'

type AllowedDates = (val: string) => boolean

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

export type Month = {
  index: string
  name: string
  abbr: string
}

export type Week = {
  index: number
  name: string
  abbr: string
}

export type PanelBtnDisabled = {
  left: boolean
  right: boolean
}

export type Choose = {
  chooseMonth: Month
  chooseYear: string
  chooseDay: string
  chooseMonths: Array<string>
  chooseDays: Array<string>
  chooseRangeMonth: Array<string>
  chooseRangeDay: Array<string>
}

export type Preview = {
  previewMonth: Month
  previewYear: string
}

export const MONTH_LIST: Array<Month> = [
  {
    index: '01',
    name: 'January',
    abbr: 'JAN',
  },
  {
    index: '02',
    name: 'February',
    abbr: 'FEB',
  },
  {
    index: '03',
    name: 'March',
    abbr: 'MAR',
  },
  {
    index: '04',
    name: 'April',
    abbr: 'APR',
  },
  {
    index: '05',
    name: 'May',
    abbr: 'MAY',
  },
  {
    index: '06',
    name: 'June',
    abbr: 'JUN',
  },
  {
    index: '07',
    name: 'July',
    abbr: 'JUL',
  },
  {
    index: '08',
    name: 'August',
    abbr: 'AUG',
  },
  {
    index: '09',
    name: 'September',
    abbr: 'SEP',
  },
  {
    index: '10',
    name: 'October',
    abbr: 'OCT',
  },
  {
    index: '11',
    name: 'November',
    abbr: 'NOV',
  },
  {
    index: '12',
    name: 'December',
    abbr: 'DEC',
  },
]

export const WEEK_HEADER: Array<Week> = [
  {
    index: 0,
    name: 'Sunday',
    abbr: 'S',
  },
  {
    index: 1,
    name: 'Monday',
    abbr: 'M',
  },
  {
    index: 2,
    name: 'Tuesday',
    abbr: 'T',
  },
  {
    index: 3,
    name: 'Wednesday',
    abbr: 'W',
  },
  {
    index: 4,
    name: 'Thursday',
    abbr: 'T',
  },
  {
    index: 5,
    name: 'Friday',
    abbr: 'F',
  },
  {
    index: 6,
    name: 'Saturday',
    abbr: 'S',
  },
]

export const props = {
  modelValue: {
    type: [String, Array] as PropType<string | Array<string>>,
  },
  type: {
    type: String,
    default: 'date',
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
  shadow: {
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
  onChange: {
    type: Function,
  },
  'onUpdate:modelValue': {
    type: Function,
  },
}
