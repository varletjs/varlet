import { VarComponent, BasicAttributes } from './varComponent'
import { ButtonProps } from './button'
import { VNode } from 'vue'

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

  $slots: {
    fab(): VNode[]
  }
}

export class _BottomNavigationComponent extends BottomNavigation {}
