import { VNode } from 'vue'
import { BasicAttributes, VarComponent } from './varComponent'

export interface SwipeItemProps extends BasicAttributes {}

export class SwipeItem extends VarComponent {
  $props: SwipeItemProps

  $slots: {
    default(): VNode[]
  }
}

export class _SwipeItemComponent extends SwipeItem {}
