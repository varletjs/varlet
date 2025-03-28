import { TeleportProps, VNode } from 'vue'
import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

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

    header(): VNode[]
  }
}

export class _FloatingPanelComponent extends FloatingPanel {}
