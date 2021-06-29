import { VarComponent } from './varComponent'

export interface ColProps {
  span?: string | number
  offset?: string | number
  onClick?: (e: Event) => void
}

export class Col extends VarComponent {
  $props: ColProps
}

export class _ColComponent extends Col {}
