import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'
import { BadgeProps } from './badge'

export interface BottomNavigationItemProps extends BasicAttributes {
  name?: string
  icon?: string
  label?: string
  namespace?: string
  badge?: boolean | BadgeProps
  onClick?: (active: string | number) => void
}

export class BottomNavigationItem extends VarComponent {
  $props: BottomNavigationItemProps
}

export class _BottomNavigationItemComponent extends BottomNavigationItem {}
