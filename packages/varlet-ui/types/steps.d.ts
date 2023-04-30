import { VarComponent, BasicAttributes, Direction as StepsDirection, ListenerProp } from './varComponent'
import { VNode } from 'vue'

export { StepsDirection }

export declare const stepsProps: Record<string, any>

export interface StepsProps extends BasicAttributes {
  active?: string | number
  direction?: StepsDirection
  activeColor?: string
  inactiveColor?: string
  onClickStep?: ListenerProp<(index: number) => void>
}

export class Steps extends VarComponent {
  $props: StepsProps

  $slots: {
    default(): VNode[]
  }
}

export class _StepsComponent extends Steps {}
