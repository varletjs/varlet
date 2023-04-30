import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'
import { VNode } from 'vue'

export declare const tabProps: Record<string, any>

export interface TabProps extends BasicAttributes {
  name?: string | number
  disabled?: boolean
  onClick?: ListenerProp<(active: string | number, e: Event) => void>
}

export class Tab extends VarComponent {
  $props: TabProps

  $slots: {
    default(): VNode[]
  }
}

export class _TabComponent extends Tab {}
