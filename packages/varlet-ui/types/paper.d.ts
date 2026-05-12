import { VNode } from 'vue'
import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export declare const paperProps: Record<keyof PaperProps, any>

export type PaperSurface = 'low'

export interface PaperRipple {
  disabled?: boolean
  color?: string
}

export interface PaperHoverable {
  disabled?: boolean
  color?: string
}

export interface PaperProps extends BasicAttributes {
  elevation?: boolean | number | string
  ripple?: boolean | PaperRipple
  radius?: string | number
  width?: string | number
  height?: string | number
  round?: boolean
  inline?: boolean
  surface?: PaperSurface
  hoverable?: boolean | PaperHoverable
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
