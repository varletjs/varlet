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

export type DatePickerPreviewState = {
  previewMonth?: Month
  previewYear: string
}
