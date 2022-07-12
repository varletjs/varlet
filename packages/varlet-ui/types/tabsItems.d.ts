import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export interface TabsItemsProps extends BasicAttributes {
  active?: string | number
  'onUpdate:active'?: (active: string | number) => void
}

export class TabsItems extends VarComponent {
  $props: TabsItemsProps
}

export class _TabsItemsComponent extends TabsItems {}
