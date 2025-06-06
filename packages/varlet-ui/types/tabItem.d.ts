import { VNode } from 'vue'
import { BasicAttributes, SetPropsDefaults, VarComponent } from './varComponent'

export declare const tabItemProps: Record<keyof TabItemProps, any>

export interface TabItemProps extends BasicAttributes {
  name?: string | number
}

export class TabItem extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<TabItemProps>

  $props: TabItemProps

  $slots: {
    default(): VNode[]
  }
}

export class _TabItemComponent extends TabItem {}
