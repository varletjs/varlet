import { VarComponent, BasicAttributes, Direction as StepsDirection } from './varComponent'
import { VNode } from 'vue'

export { StepsDirection }

export interface StepsProps extends BasicAttributes {
  active?: string | number
  direction?: StepsDirection
  activeColor?: string
  inactiveColor?: string
  onClickStep?: (index: number) => void
}

export class Steps extends VarComponent {
  $props: StepsProps

  $slots: {
    default(): VNode[]
  }
}

export class _StepsComponent extends Steps {}
