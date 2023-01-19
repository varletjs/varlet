import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'

export declare const imageProps: Record<string, any>

export type ImageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

export interface ImageProps extends BasicAttributes {
  src?: string
  fit?: ImageFit
  title?: string
  alt?: string
  width?: string | number
  height?: string | number
  radius?: string | number
  loading?: string
  error?: string
  lazy?: boolean
  ripple?: boolean
  block?: boolean
  onClick?: ListenerProp<(e: Event) => void>
  onLoad?: ListenerProp<(e: Event) => void>
  onError?: ListenerProp<(e: Event) => void>
}

export class Image extends VarComponent {
  $props: ImageProps
}

export class _ImageComponent extends Image {}
