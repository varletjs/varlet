import { VarComponent, BasicAttributes, Direction as TabsDirection, ListenerProp } from './varComponent'
import { VNode } from 'vue'

export declare const tabsProps: Record<string, any>

export type TabsScrollable = 'auto' | 'always'

export type TabsIndicatorPosition = 'normal' | 'reverse'

export { TabsDirection }

export interface TabsProps extends BasicAttributes {
  active?: string | number
  layoutDirection?: TabsDirection
  itemDirection?: TabsDirection
  fixedBottom?: boolean
  activeColor?: string
  inactiveColor?: string
  disabledColor?: string
  color?: string
  indicatorColor?: string
  indicatorSize?: string | number
  elevation?: boolean | string | number
  sticky?: boolean
  stickyCssMode?: boolean
  stickyZIndex?: number
  offsetTop?: string | number
  safeArea?: boolean
  scrollable?: TabsScrollable
  indicatorPosition?: TabsIndicatorPosition
  onClick?: ListenerProp<(active: string | number) => void>
  onChange?: ListenerProp<(active: string | number) => void>
  'onUpdate:active'?: ListenerProp<(active: string | number) => void>
}

export class Tabs extends VarComponent {
  $props: TabsProps

  $slots: {
    default(): VNode[]
  }

  resize(): void

  resizeSticky(): Promise<void>
}

export class _TabsComponent extends Tabs {}
