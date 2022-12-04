import { VarComponent, BasicAttributes } from './varComponent'
import { VNode, TeleportProps } from 'vue'

export interface OverlayProps extends BasicAttributes {
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
