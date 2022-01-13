import { VarComponent } from './varComponent'

export interface BackTopProps {
  visibilityHeight?: number | string
  duration?: number
  target?: string
  onClick?: (e: MouseEvent) => void
}

export class BackTop extends VarComponent {
  $props: BackTopProps
}

export class _BackTopComponent extends BackTop {}
