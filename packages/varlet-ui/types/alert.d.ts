import { VNode } from 'vue'
import { VarComponent, BasicAttributes, SetPropsDefaults, ListenerProp } from './varComponent'

export declare const alertProps: Record<keyof AlertProps, any>

export type AlertType = 'info' | 'success' | 'warning' | 'error'

export interface AlertProps extends BasicAttributes {
  type?: AlertType
  color?: string
  title?: string
  text?: string
  closeable?: boolean
  elevation?: boolean | string | number
  outline?: boolean
  iconName?: string
  namespace?: string
  onClose?: ListenerProp<(e: Event) => void>
}

export class Alert extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<AlertProps>

  $props: AlertProps

  $slots: {
    default(): VNode[]
    title(): VNode[]
    icon(): VNode[]
    'close-icon'(): VNode[]
  }
}

export class _AlertComponent extends Alert {}
