import { VarComponent, BasicAttributes } from './varComponent'

export type CardFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

export type CardLayout = 'row' | 'column'

export interface CardProps extends BasicAttributes {
  src?: string
  fit?: CardFit
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
  layout?: CardLayout
  floating?: boolean
  floatingDuration?: number
  'onUpdate:floating'?: (value: boolean) => void
}

export class Card extends VarComponent {
  $props: CardProps
}

export class _CardComponent extends Card {}
