import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { VNode } from 'vue'

export declare const countdownProps: Record<keyof CountdownProps, any>

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
  onEnd?: ListenerProp<() => void>
  onChange?: ListenerProp<(value: CountdownTimeData) => void>
}

export class Countdown extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<CountdownProps>

  $props: CountdownProps

  $slots: {
    default(data: CountdownTimeData): VNode[]
  }

  start(): void

  pause(): void

  reset(): void
}

export class _CountdownComponent extends Countdown {}
