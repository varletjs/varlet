import { VNode } from 'vue'
import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'

export declare const avatarProps: Record<string, any>

export type AvatarFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

export type AvatarSize = 'mini' | 'small' | 'normal' | 'large' | number | string

export interface AvatarProps extends BasicAttributes {
  round?: boolean
  size?: AvatarSize
  color?: string
  src?: string
  fit?: AvatarFit
  bordered?: boolean
  borderColor?: string
  loading?: string
  error?: string
  lazy?: boolean
  onClick?: ListenerProp<(e: Event) => void>
  onLoad?: ListenerProp<(e: Event) => void>
  onError?: ListenerProp<(e: Event) => void>
}

export class Avatar extends VarComponent {
  $props: AvatarProps

  $slots: {
    default(): VNode[]
  }
}

export class _AvatarComponent extends Avatar {}
