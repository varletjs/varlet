import { type DatePickerTypes, type Month } from './constants'

export type AllowedDates = (val: string) => boolean

export type PanelDatePickerProps = {
  type: DatePickerTypes
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

export type DatePickerSelectionState = {
  selectedMonth: Month | undefined
  selectedYear: string | undefined
  selectedDay: string | undefined
  selectedYears: Array<string>
  selectedMonths: Array<string>
  selectedDays: Array<string>
  selectedRangeYears: Array<string>
  selectedRangeMonths: Array<string>
  selectedRangeDays: Array<string>
}

export type DatePickerPreviewState = {
  previewMonth?: Month
  previewYear: string
}
