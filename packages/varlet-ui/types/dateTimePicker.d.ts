import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { VNode } from 'vue'

export declare const dateTimePickerProps: Record<keyof DateTimePickerProps, any>

export interface DateTimePickerProps extends BasicAttributes {
  modelValue: string

  active?: number
  confirmButtonText?: string
  cancelButtonText?: string

  nextStepText?: string
  prevStepText?: string

  onCancel?: ListenerProp<() => void>
  onConfirm?: ListenerProp<() => void>
  'onUpdate:modelValue'?: ListenerProp<(value: string) => void>
}

export class DateTimePicker extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<DateTimePicker>

  $props: DateTimePicker

  $slots: {
    default(): VNode[]
  }
}

export class _DateTimePickerComponent extends DateTimePicker {}
