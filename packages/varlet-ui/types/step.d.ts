import { VarComponent } from './varComponent'

export interface StepProps {
  activeIcon?: string
  currentIcon?: string
  inactiveIcon?: string
}

export class Step extends VarComponent {
  $props: StepProps
}
