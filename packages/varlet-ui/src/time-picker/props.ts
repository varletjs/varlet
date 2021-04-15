import { PropType } from 'vue'

export type Format = 'ampm' | '24hr'
export type AmPm = 'am' | 'pm'
export type Time = {
  hour: string
  minute: string
  second?: string
}

export const hoursAmpm = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
export const hours24 = ['00', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
export const minSec = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']

function formatValidator(mode: string): boolean {
  return ['ampm', '24hr'].includes(mode)
}

export const props = {
  modelValue: {
    type: String,
  },
  shadow: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
  },
  headerColor: {
    type: String,
  },
  format: {
    type: String as PropType<Format>,
    default: 'ampm',
    validator: formatValidator,
  },
  min: {
    type: String,
  },
  max: {
    type: String,
  },
  useSeconds: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  'onUpdate:modelValue': {
    type: Function,
  },
  onChange: {
    type: Function,
  },
}
