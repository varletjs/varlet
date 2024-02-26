import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { ButtonProps } from './button'
import { VNode } from 'vue'

export declare const bottomNavigationProps: Record<keyof BottomNavigationProps, any>

export interface BottomNavigationProps extends BasicAttributes {
  active?: number | string
  fixed?: boolean
  border?: boolean
  safeArea?: boolean
  zIndex?: number | string
  activeColor?: string
  inactiveColor?: string
  fabProps?: Partial<ButtonProps>
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
