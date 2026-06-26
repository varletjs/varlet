import { enumOf, type EnumOf } from '@varlet/shared'

export const DatePickerTypes = enumOf({
  Year: 'year',
  Month: 'month',
  Date: 'date',
})

export const DatePickerUnits = enumOf({
  Year: DatePickerTypes.Year,
  Month: DatePickerTypes.Month,
  Day: 'day',
})

export const MonthList = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'] as const

export const WeekHeader = ['0', '1', '2', '3', '4', '5', '6'] as const

export const DatePickerFormats = {
  Year: 'YYYY',
  Month: 'YYYY-MM',
  Day: 'YYYY-MM-D',
  DayPadded: 'YYYY-MM-DD',
} as const

export const ShiftDirections = enumOf({
  Prev: 'prev',
  Next: 'next',
})

export type DatePickerTypes = EnumOf<typeof DatePickerTypes>

export type DatePickerUnits = EnumOf<typeof DatePickerUnits>

export type ShiftDirections = EnumOf<typeof ShiftDirections>

export type Month = (typeof MonthList)[number]

export type Week = (typeof WeekHeader)[number]
