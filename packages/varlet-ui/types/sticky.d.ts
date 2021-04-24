import { VarComponent } from './varComponent'

interface StickyProps {
  offsetTop?: string | number
  zIndex?: string | number
  onScroll?: (offsetTop: number, isFixed: boolean) => void
}

export class Sticky extends VarComponent {
  $props: StickyProps
}
