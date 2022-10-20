import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export interface CountdownTimeData {
  days: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

export interface CountdownProps extends BasicAttributes {
  time?: string | number
  format?: string
  autoStart?: boolean
  onEnd?: () => void
  onChange?: (value: CountdownTimeData) => void
}

export class Countdown extends VarComponent {
  $props: CountdownProps

  $slots: {
    default(data: CountdownTimeData): VNode[]
  }

  start(): void

  pause(): void

  reset(): void
}

export class _CountdownComponent extends Countdown {}
