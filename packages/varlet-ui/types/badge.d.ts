import { VNode } from 'vue'
import { Type as BadgeType, BasicAttributes, SetPropsDefaults, VarComponent } from './varComponent'

export declare const badgeProps: Record<keyof BadgeProps, any>

export type BadgePosition = 'right-top' | 'right-bottom' | 'left-top' | 'left-bottom'

export { BadgeType }

export interface BadgeProps extends BasicAttributes {
  type?: BadgeType
  hidden?: boolean
  dot?: boolean
  value?: string | number
  maxValue?: string | number
  color?: string
  position?: BadgePosition
  icon?: string
  namespace?: string
  offsetX?: number | string
  offsetY?: number | string
}

export class Badge extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<BadgeProps>

  $props: BadgeProps

  $slots: {
    default(): VNode[]
    value(): VNode[]
  }
}

export class _BadgeComponent extends Badge {}
