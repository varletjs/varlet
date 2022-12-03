import { VarComponent, BasicAttributes } from './varComponent'
import type { TeleportProps } from 'vue'
import { VNode } from 'vue'

export interface OverlayProps extends BasicAttributes {
  class?: string
  style?: Record<string, any>
  lockScroll?: boolean
  teleport?: TeleportProps['to']
  onClick?: () => void
  'onUpdate:show'?: (show: boolean) => void
}

export class Overlay extends VarComponent {
  $props: OverlayProps

  $slots: {
    default(): VNode[]
  }
}

export class _OverlayComponent extends Overlay {}
