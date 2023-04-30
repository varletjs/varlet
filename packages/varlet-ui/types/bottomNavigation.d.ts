import { VarComponent, BasicAttributes } from './varComponent'
import { ButtonProps } from './button'
import { VNode } from 'vue'

export declare const bottomNavigationProps: Record<string, any>

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
  onBeforeChange?: (active: string | number) => any | Promise<any>
  onFabClick?: () => void
}

export class BottomNavigation extends VarComponent {
  $props: BottomNavigationProps

  $slots: {
    default(): VNode[]
    fab(): VNode[]
  }
}

export class _BottomNavigationComponent extends BottomNavigation {}
