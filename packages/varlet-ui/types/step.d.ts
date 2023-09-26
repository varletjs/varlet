import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export declare const stepProps: Record<string, any>

export interface StepProps extends BasicAttributes {
  activeIcon?: string
  currentIcon?: string
  inactiveIcon?: string
  activeIconNamespace?: string
  currentIconNamespace?: string
  inactiveIconNamespace?: string
}

export class Step extends VarComponent {
  $props: StepProps

  $slots: {
    default(): VNode[]
  }
}

export class _StepComponent extends Step {}
