import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export interface StepProps extends BasicAttributes {
  activeIcon?: string
  currentIcon?: string
  inactiveIcon?: string
}

export class Step extends VarComponent {
  $props: StepProps
}

export class _StepComponent extends Step {}
