import { VarComponent } from './varComponent'

interface StepProps {
  activeIcon?: string
  currentIcon?: string
  inactiveIcon?: string
}

export class Step extends VarComponent {
  $props: StepProps
}
