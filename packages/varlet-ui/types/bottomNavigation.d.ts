import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'
import { ButtonProps } from './button'

export interface BottomNavigationProps extends BasicAttributes {
  active?: number | string
  fixed?: boolean
  border?: boolean
  safeArea?: boolean
  zIndex?: number | string
  activeColor?: string
  inactiveColor?: string
  fabProps?: Partial<ButtonProps>
  onChange?: (active: string | number) => void
  'onUpdate:active'?: (active: string | number) => void
  onBeforeChange?: (active: string | number) => boolean | Promise<any>
  onFabClick?: () => void
}

export class BottomNavigation extends VarComponent {
  $props: BottomNavigationProps
}

export class _BottomNavigationComponent extends BottomNavigation {}
