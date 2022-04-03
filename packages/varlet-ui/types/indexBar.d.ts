import { VarComponent } from './varComponent'

export interface IndexBarProps {
  sticky?: boolean
  stickyOffsetTop?: number
  hideList?: boolean
  cssMode?: boolean
  zIndex?: number | string
  highlightColor?: string
  duration?: number | string
  onClick?: (value: string | number) => void
  onChange?: (value: string | number) => void
}

export class IndexBar extends VarComponent {
  $props: IndexBarProps

  scrollTo: (index: number | string) => void
}

export class _IndexBarComponent extends IndexBar {}
