import { VarComponent } from './varComponent'

interface IconProps {
  name?: string
  size?: string | number
  color?: string
  namespace?: string
  transition?: string | number
  onClick?: () => (event: Event) => void
}

export class Icon extends VarComponent {
  $props: IconProps
}
