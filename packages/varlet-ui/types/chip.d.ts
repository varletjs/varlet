import { VarComponent, BasicAttributes, Type as ChipType, Size as ChipSize, ListenerProp } from './varComponent'
import { VNode } from 'vue'

export declare const chipProps: Record<string, any>

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
  onClose?: ListenerProp<(e: Event) => void>
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
