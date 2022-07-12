import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export type AllowedTime = {
  hours?: (hour: number) => boolean
  minutes?: (minute: number) => boolean
  seconds?: (second: number) => boolean
}

export interface TimePickerProps extends BasicAttributes {
  modelValue?: string
  shadow?: boolean
  color?: string
  headerColor?: string
  allowedTime?: AllowedTime
  format?: 'ampm' | '24hr'
  min?: string
  max?: string
  useSeconds?: boolean
  readonly?: boolean
  onChange?: (value: string) => void
  'onUpdate:modelValue'?: (value: string) => void
}

export class TimePicker extends VarComponent {
  $props: TimePickerProps
}

export class _TimePickerComponent extends TimePicker {}
