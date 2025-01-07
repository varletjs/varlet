import { VNode } from 'vue'
import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export declare const tabProps: Record<keyof TabProps, any>

export interface TabProps extends BasicAttributes {
  name?: string | number
  disabled?: boolean
  ripple?: boolean
  onClick?: ListenerProp<(active: string | number, e: Event) => void>
}

export class Tab extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<TabProps>

  $props: TabProps

  $slots: {
    default(): VNode[]
  }
}

export class _TabComponent extends Tab {}
