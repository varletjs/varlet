import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { VNode } from 'vue'

export declare const cardProps: Record<keyof CardProps, any>

export type CardFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

export type CardLayout = 'row' | 'column'

export interface CardProps extends BasicAttributes {
  src?: string
  fit?: CardFit
  imageHeight?: string | number
  imageWidth?: string | number
  alt?: string
  title?: string
  subtitle?: string
  description?: string
  elevation?: boolean | number | string
  ripple?: boolean
  onClick?: ListenerProp<(e: Event) => void>
  layout?: CardLayout
  floating?: boolean
  floatingDuration?: number
  'onUpdate:floating'?: ListenerProp<(value: boolean) => void>
}

export class Card extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<CardProps>

  $props: CardProps

  $slots: {
    image(): VNode[]
    title(): VNode[]
    subtitle(): VNode[]
    description(): VNode[]
    extra(): VNode[]
    'close-button'(): VNode[]
    'floating-content'(): VNode[]
  }
}

export class _CardComponent extends Card {}
