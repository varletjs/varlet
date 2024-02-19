import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { VNode } from 'vue'

export declare const timePickerProps: Record<keyof TimePickerProps, any>

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
  hint?: string
  titleColor?: string
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
  static setPropsDefaults: SetPropsDefaults<TimePickerProps>

  $props: TimePickerProps

  $slots: {
    actions(): VNode[]
  }
}

export class _TimePickerComponent extends TimePicker {}
