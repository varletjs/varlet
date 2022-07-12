import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export interface SwipeItemProps extends BasicAttributes {}

export class SwipeItem extends VarComponent {
  $props: SwipeItemProps
}

export class _SwipeItemComponent extends SwipeItem {}
