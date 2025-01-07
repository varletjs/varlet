import { VNode } from 'vue'
import { BasicAttributes, SetPropsDefaults, VarComponent } from './varComponent'

export declare const menuOptionProps: Record<keyof MenuOptionProps, any>

export interface MenuOptionProps extends BasicAttributes {
  label?: any
  value?: any
  disabled?: boolean
  ripple?: boolean
}

export class MenuOption extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<MenuOptionProps>

  $props: MenuOptionProps

  $slots: {
    default(): VNode[]
  }
}

export class _MenuOptionComponent extends MenuOption {}
