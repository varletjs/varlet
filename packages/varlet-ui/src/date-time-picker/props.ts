import { type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type PickerColumnOption = {
  text?: string | number
  value?: string | number
  children?: PickerColumnOption[]
  className?: string
  textClassName?: string

  [key: PropertyKey]: any
}

export type Time = {
  hour: string
  minute: string
  second?: string
}

export type PickerGroupOption = {
  title?: string
  cancelButtonText?: string
  confirmButtonTextColor?: string
  tabs: PickerColumnOption[]
}

export const props = {
  modelValue: String as PropType<string>,
  active: {
    type: [Number, String],
    default: 0,
  },
  elevation: {
    type: [Boolean, Number, String],
    default: false,
  },
  confirmButtonText: {
    type: String,
    default: 'submit',
  },
  cancelButtonText: {
    type: String,
    default: 'cancel',
  },
  nextStepText: {
    type: String,
    default: 'next',
  },
  prevStepText: {
    type: String,
    default: 'prev',
  },
  onConfirm: defineListenerProp<(value: string | string[]) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: string) => void>(),
  onCancel: defineListenerProp<() => void>(),
}
