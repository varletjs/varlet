import { VarComponent } from './varComponent'

export interface BottomNavigationItemProps {
  name?: string
  icon?: string
  label?: string
  namespace?: string
  badge?: boolean
  onClick?: (active: string | number) => void
}

export class BottomNavigationItem extends VarComponent {
  $props: BottomNavigationItemProps
}

export class _BottomNavigationItemComponent extends BottomNavigationItem {}
