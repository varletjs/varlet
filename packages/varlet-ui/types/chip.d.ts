import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export interface ChipProps extends BasicAttributes {
  type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
  size?: 'normal' | 'mini' | 'small' | 'large'
  color?: string
  textColor?: string
  iconName?: string
  plain?: boolean
  round?: boolean
  block?: boolean
  closable?: boolean
  onClose?: (e: Event) => void
}

export class Chip extends VarComponent {
  $props: ChipProps
}

export class _ChipComponent extends Chip {}
