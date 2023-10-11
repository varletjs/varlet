import { VNode } from 'vue'
import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'

export interface FloatingPanelProps extends BasicAttributes {
  anchor?: number
  anchors?: number[]
  contentDraggable?: boolean
  duration?: number | string
  teleport?: TeleportProps['to'] | false
  lockScroll?: boolean
  safeArea?: boolean
  onAnchorChange?: ListenerProp<(height: number) => void>
  'onUpdate:anchor'?: ListenerProp<(height: number) => void>
}

export class FloatingPanel extends VarComponent {
  $props: FloatingPanelProps

  $slots: {
    default(): VNode[]
  }
}

export class _FloatingPanelComponent extends FloatingPanel {}
