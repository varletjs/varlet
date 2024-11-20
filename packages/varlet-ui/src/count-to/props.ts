import { PropType } from 'vue'

export type NumberData = {
  value: number
  state: 'running' | 'paused' | 'pending' | 'finished'
}

export const props = {
  from: {
    type: [String, Number],
    default: 0,
  },
  to: {
    type: [String, Number],
    default: 0,
  },
  duration: {
    type: [String, Number],
    default: 3000,
  },
  autoStart: {
    type: Boolean,
    default: true,
  },
  timingFunction: {
    type: Function as PropType<(v: number) => number>,
  },
  onFinished: {
    type: Function as PropType<() => void>,
  },
}
