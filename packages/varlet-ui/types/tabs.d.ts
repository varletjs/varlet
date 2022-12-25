import { VarComponent, BasicAttributes, Direction as TabsDirection, ListenerProp } from './varComponent'
import { VNode } from 'vue'

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
  elevation?: boolean
  sticky?: boolean
  safeArea?: boolean
  offsetTop?: string | number
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
}

export class _TabsComponent extends Tabs {}
