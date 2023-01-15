import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'
import { VNode } from 'vue'

export declare const datePickerProps: Record<string, any>

export type DatePickerType = 'date' | 'month'

export interface DatePickerProps extends BasicAttributes {
  modelValue: string | Array<string>
  type?: DatePickerType
  allowedDates?: (val: string) => boolean
  color?: string
  headerColor?: string
  elevation?: boolean
  firstDayOfWeek?: string | number
  min?: string
  max?: string
  showCurrent?: boolean
  readonly?: boolean
  multiple?: boolean
  range?: boolean
  touchable?: boolean
  onPreview?: ListenerProp<(year: number, month: number) => void>
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
  $props: DatePickerProps

  $slots: {
    year(data: DatePickerYear): VNode[]
    month(data: DatePickerMonth): VNode[]
    date(data: DatePickerDate): VNode[]
    range(data: DatePickerRange): VNode[]
    multiple(data: DatePickerMultiple): VNode[]
  }
}

export class _DatePickerComponent extends DatePicker {}
