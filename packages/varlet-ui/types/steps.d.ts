import { VNode } from 'vue'
import {
  BasicAttributes,
  ListenerProp,
  SetPropsDefaults,
  Direction as StepsDirection,
  VarComponent,
} from './varComponent'

export { StepsDirection }

export declare const stepsProps: Record<keyof StepsProps, any>

export interface StepsProps extends BasicAttributes {
  active?: string | number
  direction?: StepsDirection
  activeColor?: string
  inactiveColor?: string
  onClickStep?: ListenerProp<(index: number) => void>
}

export class Steps extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<StepsProps>

  $props: StepsProps

  $slots: {
    default(): VNode[]
  }
}

export class _StepsComponent extends Steps {}
