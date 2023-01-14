import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export declare const optionProps: Record<string, any>

export interface OptionProps extends BasicAttributes {
  label?: any
  value?: any
}

export class Option extends VarComponent {
  $props: OptionProps

  $slots: {
    default(): VNode[]
  }
}

export class _OptionComponent extends Option {}
