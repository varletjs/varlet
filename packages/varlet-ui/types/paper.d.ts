import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'
import { VNode } from 'vue'

export declare const paperProps: Record<string, any>

export interface PaperProps extends BasicAttributes {
  elevation?: string | number
  ripple?: boolean
  radius?: string | number
  width?: string | number
  height?: string | number
  round?: boolean
  inline?: boolean
  onClick?: ListenerProp<(e: Event) => void>
}

export class Paper extends VarComponent {
  $props: PaperProps

  $slots: {
    default(): VNode[]
  }
}

export class _PaperComponent extends Paper {}
