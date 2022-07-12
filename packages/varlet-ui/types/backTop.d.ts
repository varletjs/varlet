import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

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
}

export class _BackTopComponent extends BackTop {}
