import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { VNode, TeleportProps } from 'vue'

export declare const overlayProps: Record<keyof OverlayProps, any>

export interface OverlayProps extends BasicAttributes {
  lockScroll?: boolean
  teleport?: TeleportProps['to'] | false
  onClick?: ListenerProp<() => void>
  'onUpdate:show'?: ListenerProp<(show: boolean) => void>
}

export class Overlay extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<OverlayProps>

  $props: OverlayProps

  $slots: {
    default(): VNode[]
  }
}

export class _OverlayComponent extends Overlay {}
