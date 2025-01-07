import { VNode } from 'vue'
import { ButtonProps } from './button'
import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export declare const bottomNavigationProps: Record<keyof BottomNavigationProps, any>

export interface BottomNavigationProps extends BasicAttributes {
  active?: number | string
  fixed?: boolean
  border?: boolean
  safeArea?: boolean
  zIndex?: number | string
  activeColor?: string
  inactiveColor?: string
  placeholder?: boolean
  fabProps?: Partial<ButtonProps>
  variant?: boolean
  onChange?: ListenerProp<(active: string | number) => void>
  onBeforeChange?: ListenerProp<(active: string | number) => any | Promise<any>>
  onFabClick?: ListenerProp<() => void>
  'onUpdate:active'?: ListenerProp<(active: string | number) => void>
}

export class BottomNavigation extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<BottomNavigationProps>

  $props: BottomNavigationProps

  $slots: {
    default(): VNode[]
    fab(): VNode[]
  }
}

export class _BottomNavigationComponent extends BottomNavigation {}
