import type { PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type Format = 'ampm' | '24hr'
export type AmPm = 'am' | 'pm'
export type Time = {
  hour: string
  minute: string
  second?: string
}

export type AllowedTime = {
  hours?: (hour: number) => boolean
  minutes?: (minute: number) => boolean
  seconds?: (second: number) => boolean
}

export const hoursAmpm = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
export const hours24 = ['00', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
export const minSec = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']

export const props = {
  modelValue: String,
  elevation: {
    type: [Boolean, Number, String],
    default: false,
  },
  hint: String,
  color: String,
  titleColor: String,
  format: {
    type: String as PropType<Format>,
    default: 'ampm',
  },
  allowedTime: Object as PropType<AllowedTime>,
  min: String,
  max: String,
  useSeconds: Boolean,
  readonly: Boolean,
  'onUpdate:modelValue': defineListenerProp<(value: string) => void>(),
  onChange: defineListenerProp<(value: string) => void>(),
}
