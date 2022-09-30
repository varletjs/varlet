import { VarComponent, BasicAttributes, Type as BadgeType } from './varComponent'

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
}

export class Badge extends VarComponent {
  $props: BadgeProps
}

export class _BadgeComponent extends Badge {}
