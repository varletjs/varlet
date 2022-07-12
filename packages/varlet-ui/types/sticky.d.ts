import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export interface StickyProps extends BasicAttributes {
  offsetTop?: string | number
  zIndex?: string | number
  cssMode?: boolean
  disabled?: boolean
  onScroll?: (offsetTop: number, isFixed: boolean) => void
}

export class Sticky extends VarComponent {
  $props: StickyProps
}

export class _StickyComponent extends Sticky {}
