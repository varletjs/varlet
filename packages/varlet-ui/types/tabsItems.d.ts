import { VarComponent, BasicAttributes } from './varComponent'
import type { Swipe } from './swipe'

export interface TabsItemsProps extends BasicAttributes {
  active?: string | number
  'onUpdate:active'?: (active: string | number) => void
}

export class TabsItems extends VarComponent {
  $props: TabsItemsProps

  getSwipe(): Swipe
}

export class _TabsItemsComponent extends TabsItems {}
