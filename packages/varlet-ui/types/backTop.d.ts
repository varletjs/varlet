import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'
import { VNode } from 'vue'

export declare const backTopProps: Record<string, any>

export interface BackTopProps extends BasicAttributes {
  visibilityHeight?: number | string
  duration?: number
  target?: string | HTMLElement
  right?: number | string
  elevation?: boolean | number | string
  bottom?: number | string
  onClick?: ListenerProp<(e: MouseEvent) => void>
}

export class BackTop extends VarComponent {
  $props: BackTopProps

  $slots: {
    default(): VNode[]
  }
}

export class _BackTopComponent extends BackTop {}
