import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export interface StickyProps extends BasicAttributes {
  offsetTop?: string | number
  zIndex?: string | number
  cssMode?: boolean
  disabled?: boolean
  onScroll?: (offsetTop: number, isFixed: boolean) => void
}

export class Sticky extends VarComponent {
  $props: StickyProps

  $slots: {
    default(): VNode[]
  }
}

export class _StickyComponent extends Sticky {}
