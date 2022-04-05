import type { PropType } from 'vue'

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
  onEnd: {
    type: Function as PropType<() => void>,
  },
  onChange: {
    type: Function as PropType<(value: TimeData) => void>,
  },
}
