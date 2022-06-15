import { VarComponent } from './varComponent'

export interface IconProps {
  name?: string
  size?: string | number
  color?: string
  namespace?: string
  transition?: string | number
  onClick?: (event: Event) => void
}

export class Icon extends VarComponent {
  $props: IconProps
}

export class _IconComponent extends Icon {}
