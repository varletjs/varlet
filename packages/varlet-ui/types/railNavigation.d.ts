import { VNode } from 'vue'
import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export declare const railNavigationProps: Record<keyof RailNavigationProps, any>

export interface RailNavigationProps extends BasicAttributes {
  active?: number | string
  ripple?: boolean
  showLabel?: boolean
  border?: boolean
  onChange?: ListenerProp<(active: number | string) => void>
  'onUpdate:active'?: ListenerProp<(active: number | string) => void>
}

export class RailNavigation extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<RailNavigationProps>

  $props: RailNavigationProps

  $slots: {
    default(): VNode[]
    start(): VNode[]
    end(): VNode[]
  }
}

export class _RailNavigationComponent extends RailNavigation {}
