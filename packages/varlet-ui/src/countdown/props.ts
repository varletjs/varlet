import { defineListenerProp } from '../utils/components'

export type TimeData = {
  days: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

export const props = {
  time: {
    type: [String, Number],
    default: 0,
  },
  format: {
    type: String,
    default: 'HH : mm : ss',
  },
  autoStart: {
    type: Boolean,
    default: true,
  },
  onEnd: defineListenerProp<() => void>(),
  onChange: defineListenerProp<(value: TimeData) => void>(),
}
