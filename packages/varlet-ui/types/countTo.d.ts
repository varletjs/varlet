import { VarComponent, BasicAttributes, SetPropsDefaults, ListenerProp } from './varComponent'

export declare const countToProps: Record<keyof CountToProps, any>

export interface CountToData {
  value: number
}

export interface CountToProps extends BasicAttributes {
  from?: string | number
  to?: string | number
  duration?: string | number
  precision?: string | number
  autoStart?: boolean
  timingFunction?: (v: number) => number
  onEnd?: ListenerProp<() => void>
}

export class CountTo extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<CountToProps>

  $props: CountToProps

  $slots: {
    default(data: CountToData): VNode[]
  }

  start(): void

  pause(): void

  reset(): void
}

export class _CountToComponent extends CountTo {}
