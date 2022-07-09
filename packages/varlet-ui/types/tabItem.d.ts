import { VarComponent, BasicAttributes } from './varComponent'

export interface TabItemProps extends BasicAttributes {
  name?: string | number
}

export class TabItem extends VarComponent {
  $props: TabItemProps
}

export class _TabItemComponent extends TabItem {}
