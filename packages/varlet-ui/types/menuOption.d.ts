import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export declare const menuOptionProps: Record<string, any>

export interface MenuOptionProps extends BasicAttributes {
  label?: any
  value?: any
  disabled?: boolean
}

export class MenuOption extends VarComponent {
  $props: MenuOptionProps

  $slots: {
    default(): VNode[]
  }
}

export class _MenuOptionComponent extends MenuOption {}
