import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export interface BackTopProps extends BasicAttributes {
  visibilityHeight?: number | string
  duration?: number
  target?: string | HTMLElement
  right?: number | string
  bottom?: number | string
  onClick?: (e: MouseEvent) => void
}

export class BackTop extends VarComponent {
  $props: BackTopProps

  $slots: {
    default(): VNode[]
  }
}

export class _BackTopComponent extends BackTop {}
