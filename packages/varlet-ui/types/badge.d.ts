import { VarComponent } from './varComponent'

export interface BadgeProps {
  type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
  hidden?: boolean
  dot?: boolean
  value?: string | number
  maxValue?: string | number
  color?: string
  position?: 'right-top' | 'right-bottom' | 'left-top' | 'left-bottom'
  icon?: string
}

export class Badge extends VarComponent {
  $props: BadgeProps
}

export class _BadgeComponent extends Badge {}
