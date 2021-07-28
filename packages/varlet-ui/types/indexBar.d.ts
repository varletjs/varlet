import { VarComponent } from './varComponent'

export interface IndexBarProps {
  sticky?: boolean
  stickyOffsetTop?: number
  hideList?: boolean
  zIndex?: number | string
  highlightColor?: string
  duration?: number
  onClick?: (value: string | number) => void
  onChange?: (value: string | number) => void
  'onUpdate:modelValue'?: (value: string | number) => void
}

export class IndexBar extends VarComponent {
  $props: IndexBarProps

  scrollTo: (index: number | string) => void
}

export class _IndexBarComponent extends IndexBar {}
