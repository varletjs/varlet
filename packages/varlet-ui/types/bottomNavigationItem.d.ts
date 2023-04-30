import { VarComponent, BasicAttributes } from './varComponent'
import { BadgeProps } from './badge'
import { VNode } from 'vue'

export declare const bottomNavigationItemProps: Record<string, any>

export interface BottomNavigationItemProps extends BasicAttributes {
  name?: string
  icon?: string
  label?: string
  namespace?: string
  badge?: boolean | BadgeProps
  onClick?: (active: string | number) => void
}

export interface BottomNavigationItemIcon {
  active: boolean
}

export class BottomNavigationItem extends VarComponent {
  $props: BottomNavigationItemProps

  $slots: {
    default(): VNode[]
    icon(data: BottomNavigationItemIcon): VNode[]
  }
}

export class _BottomNavigationItemComponent extends BottomNavigationItem {}
