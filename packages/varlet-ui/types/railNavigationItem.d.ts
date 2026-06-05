import { VNode } from 'vue'
import { BadgeProps } from './badge'
import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export declare const railNavigationItemProps: Record<keyof RailNavigationItemProps, any>

export interface RailNavigationItemData {
  active: boolean
}

export interface RailNavigationItemIconData {
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
    default(data: RailNavigationItemData): VNode[]
    icon(data: RailNavigationItemIconData): VNode[]
  }
}

export class _RailNavigationItemComponent extends RailNavigationItem {}
