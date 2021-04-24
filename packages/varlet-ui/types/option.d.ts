import { VarComponent } from './varComponent'

interface OptionProps {
  label?: any
  value?: any
}

export class Option extends VarComponent {
  $props: OptionProps
}
