import { VarComponent } from './varComponent'

export interface BottomNavigationProps {
  active?: number | string
  fixed?: boolean
  border?: boolean
  zIndex?: number | string
  activeColor?: string
  inactiveColor?: string
  onChange?: (active: string | number) => void
  'onUpdate:modelValue'?: (active: string | number) => void
  onBeforeChange?: (active: string | number) => boolean | Promise<any>
}

export class BottomNavigation extends VarComponent {
  $props: BottomNavigationProps
}

export class _BottomNavigationComponent extends BottomNavigation {}
