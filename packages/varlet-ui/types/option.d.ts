import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

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
