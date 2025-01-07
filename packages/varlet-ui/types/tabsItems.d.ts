import { VNode } from 'vue'
import { Swipe } from './swipe'
import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export declare const tabsItemsProps: Record<keyof TabsItemsProps, any>

export interface TabsItemsProps extends BasicAttributes {
  active?: string | number
  'onUpdate:active'?: ListenerProp<(active: string | number) => void>
}

export class TabsItems extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<TabsItemsProps>

  $props: TabsItemsProps

  $slots: {
    default(): VNode[]
  }

  getSwipe(): Swipe
}

export class _TabsItemsComponent extends TabsItems {}
