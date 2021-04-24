import { VarComponent } from './varComponent'

interface ColProps {
  span?: string | number
  offset?: string | number
  onClick?: (e: Event) => void
}

export class Col extends VarComponent {
  $props: ColProps
}
