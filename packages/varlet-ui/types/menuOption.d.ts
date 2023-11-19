import { VarComponent, BasicAttributes, SetPropsDefaults } from './varComponent'
import { VNode } from 'vue'

export declare const menuOptionProps: Record<keyof MenuOptionProps, any>

export interface MenuOptionProps extends BasicAttributes {
  label?: any
  value?: any
  disabled?: boolean
}

export class MenuOption extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<MenuOptionProps>

  $props: MenuOptionProps

  $slots: {
    default(): VNode[]
  }
}

export class _MenuOptionComponent extends MenuOption {}
