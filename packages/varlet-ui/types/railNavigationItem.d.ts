import { VNode } from 'vue'
import { BadgeProps } from './badge'
import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export declare const railNavigationItemProps: Record<keyof RailNavigationItemProps, any>

export interface RailNavigationItemSlotContext {
  active: boolean
}

export interface RailNavigationItemProps extends BasicAttributes {
  name?: number | string
  label?: string
  icon?: string
  namespace?: string
  badge?: boolean | BadgeProps
  disabled?: boolean
  onClick?: ListenerProp<(active: number | string) => void>
}

export class RailNavigationItem extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<RailNavigationItemProps>

  $props: RailNavigationItemProps

  $slots: {
    default(context: RailNavigationItemSlotContext): VNode[]
    icon(context: RailNavigationItemSlotContext): VNode[]
  }
}

export class _RailNavigationItemComponent extends RailNavigationItem {}
