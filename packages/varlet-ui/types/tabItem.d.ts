import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export interface TabItemProps extends BasicAttributes {
  name?: string | number
}

export class TabItem extends VarComponent {
  $props: TabItemProps

  $slots: {
    default(): VNode[]
  }
}

export class _TabItemComponent extends TabItem {}
