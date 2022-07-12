import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export interface IconProps extends BasicAttributes {
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
