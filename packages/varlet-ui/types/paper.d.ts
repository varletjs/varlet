import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { VNode } from 'vue'

export declare const paperProps: Record<keyof PaperProps, any>

export interface PaperProps extends BasicAttributes {
  elevation?: boolean | number | string
  ripple?: boolean
  radius?: string | number
  width?: string | number
  height?: string | number
  round?: boolean
  inline?: boolean
  onClick?: ListenerProp<(e: Event) => void>
}

export class Paper extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<PaperProps>

  $props: PaperProps

  $slots: {
    default(): VNode[]
  }
}

export class _PaperComponent extends Paper {}
