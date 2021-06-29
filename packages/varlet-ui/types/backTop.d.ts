import { VarComponent } from './varComponent'

export interface BackTopProps {
  visibilityHeight?: number | string
  duration?: number
  target?: string
  onClick?: (e: Event) => void
}

export class BackTop extends VarComponent {
  $props: BackTopProps
}

export class _BackTopComponent extends BackTop {}
