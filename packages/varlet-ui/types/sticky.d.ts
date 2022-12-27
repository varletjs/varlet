import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'
import { VNode } from 'vue'

export interface StickyProps extends BasicAttributes {
  offsetTop?: string | number
  zIndex?: string | number
  cssMode?: boolean
  disabled?: boolean
  onScroll?: ListenerProp<(offsetTop: number, isFixed: boolean) => void>
}

export interface StickyResizeParams {
  offsetTop: number
  isFixed: boolean
}

export class Sticky extends VarComponent {
  $props: StickyProps

  $slots: {
    default(): VNode[]
  }

  resize(): StickyResizeParams | undefined
}

export class _StickyComponent extends Sticky {}
