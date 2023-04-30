import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'
import { VNode } from 'vue'

export declare const stickyProps: Record<string, any>

export interface StickyProps extends BasicAttributes {
  offsetTop?: string | number
  zIndex?: string | number
  cssMode?: boolean
  disabled?: boolean
  onScroll?: ListenerProp<(offsetTop: number, isFixed: boolean) => void>
}

export class Sticky extends VarComponent {
  $props: StickyProps

  $slots: {
    default(): VNode[]
  }

  resize(): Promise<void>
}

export class _StickyComponent extends Sticky {}
