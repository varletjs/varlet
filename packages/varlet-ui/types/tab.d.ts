import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export interface TabProps extends BasicAttributes {
  name?: string | number
  disabled?: boolean
  onClick?: (active: string | number, e: Event) => void
}

export class Tab extends VarComponent {
  $props: TabProps

  $slots: {
    default(): VNode[]
  }
}

export class _TabComponent extends Tab {}
