import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export interface SwipeItemProps extends BasicAttributes {}

export class SwipeItem extends VarComponent {
  $props: SwipeItemProps

  $slots: {
    default(): VNode[]
  }
}

export class _SwipeItemComponent extends SwipeItem {}
