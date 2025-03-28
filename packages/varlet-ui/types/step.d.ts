import { VNode } from 'vue'
import { BasicAttributes, SetPropsDefaults, VarComponent } from './varComponent'

export declare const stepProps: Record<keyof StepProps, any>

export interface StepProps extends BasicAttributes {
  activeIcon?: string
  currentIcon?: string
  inactiveIcon?: string
  activeIconNamespace?: string
  currentIconNamespace?: string
  inactiveIconNamespace?: string
}

export class Step extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<StepProps>

  $props: StepProps

  $slots: {
    default(): VNode[]
  }
}

export class _StepComponent extends Step {}
