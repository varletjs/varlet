import { TeleportProps, VNode } from 'vue'
import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export declare const overlayProps: Record<keyof OverlayProps, any>

export interface OverlayProps extends BasicAttributes {
  lockScroll?: boolean
  teleport?: TeleportProps['to'] | false
  closeOnKeyEscape?: boolean
  onClick?: ListenerProp<() => void>
  onKeyEscape?: ListenerProp<() => void>
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
