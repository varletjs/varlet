import { VarComponent, BasicAttributes, Type as ChipType, Size as ChipSize } from './varComponent'

export interface ChipProps extends BasicAttributes {
  type?: ChipType
  size?: ChipSize
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
