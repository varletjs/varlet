import { VarComponent } from './varComponent'

export interface TimePickerProps {
  modelValue?: string
  shadow?: boolean
  color?: string
  headerColor?: string
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
