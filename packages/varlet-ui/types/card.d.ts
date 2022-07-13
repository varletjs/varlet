import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export interface CardProps extends BasicAttributes {
  src?: string
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  /**
   * @deprecated use imageHeight instead
   */
  height?: string | number
  imageHeight?: string | number
  imageWidth?: string | number
  alt?: string
  title?: string
  subtitle?: string
  description?: string
  elevation?: string | number
  ripple?: boolean
  onClick?: (e: Event) => void
  layout?: 'row' | 'column'
  floating?: boolean
  floatingDuration?: number
  'onUpdate:floating'?: (value: boolean) => void
}

export class Card extends VarComponent {
  $props: CardProps
}

export class _CardComponent extends Card {}
