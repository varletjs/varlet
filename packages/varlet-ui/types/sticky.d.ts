import { VNode } from 'vue'
import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export declare const stickyProps: Record<keyof StickyProps, any>

export interface StickyProps extends BasicAttributes {
  offsetTop?: string | number
  zIndex?: string | number
  cssMode?: boolean
  disabled?: boolean
  onScroll?: ListenerProp<(offsetTop: number, isFixed: boolean) => void>
}

export class Sticky extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<StickyProps>

  $props: StickyProps

  $slots: {
    default(): VNode[]
  }

  resize(): Promise<void>
}

export class _StickyComponent extends Sticky {}
