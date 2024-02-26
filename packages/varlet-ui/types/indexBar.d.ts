import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { VNode } from 'vue'

export declare const indexBarProps: Record<keyof IndexBarProps, any>

export interface IndexBarScrollToOptions {
  event?: boolean
}

export interface IndexBarProps extends BasicAttributes {
  sticky?: boolean
  stickyOffsetTop?: number | string
  hideList?: boolean
  stickyCssMode?: boolean
  zIndex?: number | string
  highlightColor?: string
  duration?: number | string
  onClick?: ListenerProp<(value: string | number) => void>
  onChange?: ListenerProp<(value: string | number) => void>
}

export class IndexBar extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<IndexBarProps>

  $props: IndexBarProps

  $slots: {
    default(): VNode[]
    'anchor-name'(anchorName: string): VNode[]
  }

  scrollTo: (index: number | string, options?: IndexBarScrollToOptions) => void
}

export class _IndexBarComponent extends IndexBar {}
