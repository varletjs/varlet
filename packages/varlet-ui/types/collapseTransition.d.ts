import { VNode } from 'vue'
import { BasicAttributes, SetPropsDefaults, VarComponent } from './varComponent'

export declare const collapseTransitionProps: Record<keyof CollapseTransitionProps, any>

export interface CollapseTransitionProps extends BasicAttributes {
  expand?: boolean
}

export class CollapseTransition extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<CollapseTransitionProps>

  $props: CollapseTransitionProps

  $slots: {
    default(): VNode[]
  }
}

export class _CollapseTransitionComponent extends CollapseTransition {}
