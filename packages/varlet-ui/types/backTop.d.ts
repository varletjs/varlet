import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { VNode } from 'vue'

export declare const backTopProps: Record<keyof BackTopProps, any>

export interface BackTopProps extends BasicAttributes {
  visibilityHeight?: number | string
  duration?: number
  target?: string | HTMLElement
  right?: number | string
  elevation?: boolean | number | string
  bottom?: number | string
  onClick?: ListenerProp<(e: Event) => void>
}

export class BackTop extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<BackTopProps>

  $props: BackTopProps

  $slots: {
    default(): VNode[]
  }
}

export class _BackTopComponent extends BackTop {}
