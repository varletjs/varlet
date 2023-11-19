import { VNode, TeleportProps } from 'vue'
import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'

export declare const floatingPanelProps: Record<keyof FloatingPanelProps, any>

export interface FloatingPanelProps extends BasicAttributes {
  anchor?: number
  anchors?: number[]
  contentDraggable?: boolean
  duration?: number | string
  elevation?: boolean | number | string
  teleport?: TeleportProps['to'] | false
  safeArea?: boolean
  onAnchorChange?: ListenerProp<(height: number) => void>
  'onUpdate:anchor'?: ListenerProp<(height: number) => void>
}

export class FloatingPanel extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<FloatingPanelProps>

  $props: FloatingPanelProps

  $slots: {
    default(): VNode[]
  }
}

export class _FloatingPanelComponent extends FloatingPanel {}
