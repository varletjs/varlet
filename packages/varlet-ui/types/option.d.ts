import { VarComponent } from './varComponent'

export interface OptionProps {
  label?: any
  value?: any
}

export class Option extends VarComponent {
  $props: OptionProps
}

export class _OptionComponent extends Option {}
