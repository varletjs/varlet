import { VarComponent, BasicAttributes, SetPropsDefaults } from './varComponent'
import { VNode } from 'vue'

export declare const optionProps: Record<keyof OptionProps, any>

export interface OptionProps extends BasicAttributes {
  label?: any
  value?: any
  disabled?: boolean
}

export interface OptionData {
  selected: boolean
}

export class Option extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<OptionProps>

  $props: OptionProps

  $slots: {
    default(data: OptionData): VNode[]
  }
}

export class _OptionComponent extends Option {}
