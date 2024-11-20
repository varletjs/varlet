import { VarComponent, BasicAttributes, SetPropsDefaults } from './varComponent'

export declare const countToProps: Record<keyof CountToProps, any>

export interface CountToNumberData {
  value: number
  state: 'running' | 'paused' | 'pending' | 'finished'
}

export interface CountToProps extends BasicAttributes {
  from: string | number
  to: string | number
  duration: string | number
  autoStart: boolean
  timingFunction?: PropType<(v: number) => number>
  onFinished?: PropType<() => void>
}

export class CountTo extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<CountToProps>

  $props: CountToProps

  $slots: {
    default(data: CountToNumberData): VNode[]
  }

  start(): void

  pause(): void

  reset(): void
}

export class _CountToComponent extends CountTo {}
