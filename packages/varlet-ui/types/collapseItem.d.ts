import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export interface CollapseItemProps extends BasicAttributes {
  name?: string | number
  title?: string
  icon?: string
  disabled?: boolean
}

export class CollapseItem extends VarComponent {
  $props: CollapseItemProps
}

export class _CollapseItemComponent extends CollapseItem {}
