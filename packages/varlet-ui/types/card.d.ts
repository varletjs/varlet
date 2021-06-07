import { VarComponent } from './varComponent'

interface CardProps {
  src?: string
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  height?: string | number
  alt?: string
  title?: string
  subtitle?: string
  description?: string
  elevation?: string | number
  ripple?: boolean
  onClick?: (e: Event) => void
}

export class Card extends VarComponent {
  $props: CardProps
}
