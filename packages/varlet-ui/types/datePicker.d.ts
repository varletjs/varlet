import { VNode } from 'vue'
import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export declare const datePickerProps: Record<keyof DatePickerProps, any>

export type DatePickerType = 'year' | 'date' | 'month'

export interface DatePickerProps extends BasicAttributes {
  modelValue: string | Array<string>
  type?: DatePickerType
  allowedDates?: (val: string) => boolean
  color?: string
  hint?: string
  titleColor?: string
  elevation?: boolean | string | number
  buttonElevation?: boolean | string | number
  firstDayOfWeek?: string | number
  min?: string
  max?: string
  showCurrent?: boolean
  readonly?: boolean
  multiple?: boolean
  range?: boolean
  touchable?: boolean
  onPreview?: ListenerProp<(year: number, month: number, day?: number) => void>
  onChange?: ListenerProp<(value: string | string[]) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: string | string[]) => void>
}

export interface DatePickerYear {
  year: string
}

export interface DatePickerMonth extends DatePickerYear {
  month: string
}

export interface DatePickerDate extends DatePickerMonth {
  date: string
  week: string
}

export interface DatePickerRange {
  choose: [string, string]
}

export interface DatePickerMultiple {
  choose: Array<string>
}

export class DatePicker extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<DatePickerProps>

  $props: DatePickerProps

  $slots: {
    year(data: DatePickerYear): VNode[]
    month(data: DatePickerMonth): VNode[]
    date(data: DatePickerDate): VNode[]
    range(data: DatePickerRange): VNode[]
    multiple(data: DatePickerMultiple): VNode[]
    actions(): VNode[]
  }
}

export class _DatePickerComponent extends DatePicker {}
