import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export interface StepProps extends BasicAttributes {
  activeIcon?: string
  currentIcon?: string
  inactiveIcon?: string
}

export class Step extends VarComponent {
  $props: StepProps

  $slots: {
    default(): VNode[]
  }
}

export class _StepComponent extends Step {}
