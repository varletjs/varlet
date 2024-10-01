import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { VNode } from 'vue'

export declare const cardProps: Record<keyof CardProps, any>

export type CardFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

export type CardLayout = 'row' | 'column'

export type CardVariant = 'standard' | 'outlined' | 'filled'

export interface CardProps extends BasicAttributes {
  variant?: CardVariant
  src?: string
  fit?: CardFit
  imageHeight?: string | number
  imageWidth?: string | number
  alt?: string
  title?: string
  subtitle?: string
  description?: string
  elevation?: boolean | number | string
  filled?: boolean
  ripple?: boolean
  layout?: CardLayout
  floating?: boolean
  floatingDuration?: number
  onClick?: ListenerProp<(e: Event) => void>
  'onUpdate:floating'?: ListenerProp<(value: boolean) => void>

  /**
   * @deprecated
   */
  outline?: boolean
}

export interface CardTitleData {
  slotClass: string
}

export interface CardSubtitleData {
  slotClass: string
}

export interface CardDescriptionData {
  slotClass: string
}

export class Card extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<CardProps>

  $props: CardProps

  $slots: {
    image(): VNode[]
    default(): VNode[]
    title(data: CardTitleData): VNode[]
    subtitle(data: CardSubtitleData): VNode[]
    description(data: CardDescriptionData): VNode[]
    extra(): VNode[]
    'close-button'(): VNode[]
    'floating-content'(): VNode[]
  }
}

export class _CardComponent extends Card {}
