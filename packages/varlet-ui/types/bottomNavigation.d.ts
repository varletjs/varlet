import { VarComponent } from './varComponent'
import { ButtonProps } from './button'

export interface BottomNavigationProps {
  active?: number | string
  fixed?: boolean
  border?: boolean
  zIndex?: number | string
  activeColor?: string
  inactiveColor?: string
  onChange?: (active: string | number) => void
  'onUpdate:active'?: (active: string | number) => void
  onBeforeChange?: (active: string | number) => boolean | Promise<any>
  onFabClick?: () => void
  fabProps: ButtonProps
}

export class BottomNavigation extends VarComponent {
  $props: BottomNavigationProps
}

export class _BottomNavigationComponent extends BottomNavigation {}
