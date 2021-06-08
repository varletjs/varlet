import { VarComponent } from './varComponent'

export interface StickyProps {
  offsetTop?: string | number
  zIndex?: string | number
  onScroll?: (offsetTop: number, isFixed: boolean) => void
}

export class Sticky extends VarComponent {
  $props: StickyProps
}
