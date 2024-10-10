import { VNode } from 'vue'
import { VarComponent, BasicAttributes, SetPropsDefaults, ListenerProp } from './varComponent'

export declare const alertProps: Record<keyof AlertProps, any>

export type AlertType = 'info' | 'success' | 'warning' | 'error'

export type AlertVariant = 'filled' | 'outlined' | 'standard'

export interface AlertProps extends BasicAttributes {
  type?: AlertType
  variant?: AlertVariant
  color?: string
  title?: string
  message?: string
  closeable?: boolean
  elevation?: boolean | string | number
  iconName?: string
  namespace?: string
  onClose?: ListenerProp<(e: Event) => void>
}

export class Alert extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<AlertProps>

  $props: AlertProps

  $slots: {
    default(): VNode[]
    content(): VNode[]
    title(): VNode[]
    icon(): VNode[]
    'close-icon'(): VNode[]
  }
}

export class _AlertComponent extends Alert {}
