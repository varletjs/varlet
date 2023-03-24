import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'

export declare const timePickerProps: Record<string, any>

export type AllowedTime = {
  hours?: (hour: number) => boolean
  minutes?: (minute: number) => boolean
  seconds?: (second: number) => boolean
}

export type TimePickerFormat = 'ampm' | '24hr'

export interface TimePickerProps extends BasicAttributes {
  modelValue?: string
  elevation?: boolean | string | number
  color?: string
  headerColor?: string
  allowedTime?: AllowedTime
  format?: TimePickerFormat
  min?: string
  max?: string
  useSeconds?: boolean
  readonly?: boolean
  onChange?: ListenerProp<(value: string) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: string) => void>
}

export class TimePicker extends VarComponent {
  $props: TimePickerProps
}

export class _TimePickerComponent extends TimePicker {}
