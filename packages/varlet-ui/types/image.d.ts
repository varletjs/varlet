import { VarComponent, BasicAttributes } from './varComponent'

type ImageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

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
  onClick?: (e: Event) => void
  onLoad?: (e: Event) => void
  onError?: (e: Event) => void
}

export class Image extends VarComponent {
  $props: ImageProps
}

export class _ImageComponent extends Image {}
