import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export interface OptionProps extends BasicAttributes {
  label?: any
  value?: any
}

export class Option extends VarComponent {
  $props: OptionProps
}

export class _OptionComponent extends Option {}
