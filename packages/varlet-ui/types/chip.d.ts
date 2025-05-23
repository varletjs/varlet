import { VNode } from 'vue'
import {
  BasicAttributes,
  Size as ChipSize,
  Type as ChipType,
  ListenerProp,
  SetPropsDefaults,
  VarComponent,
} from './varComponent'

export declare const chipProps: Record<keyof ChipProps, any>

export { ChipType, ChipSize }

export interface ChipProps extends BasicAttributes {
  type?: ChipType
  size?: ChipSize
  color?: string
  textColor?: string
  iconName?: string
  namespace?: string
  plain?: boolean
  round?: boolean
  elevation?: boolean | number | string
  block?: boolean
  closeable?: boolean
  onClose?: ListenerProp<(e: Event) => void>
}

export class Chip extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<ChipProps>

  $props: ChipProps

  $slots: {
    default(): VNode[]
    left(): VNode[]
    right(): VNode[]
  }
}

export class _ChipComponent extends Chip {}
