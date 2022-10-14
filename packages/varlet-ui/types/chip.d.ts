import { VarComponent, BasicAttributes, Type as ChipType, Size as ChipSize } from './varComponent'
import { VNode } from 'vue'

export { ChipType, ChipSize }

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

  $slots: {
    default(): VNode[]
    left(): VNode[]
    right(): VNode[]
  }
}

export class _ChipComponent extends Chip {}
