import { VarComponent } from './varComponent'

export interface IndexBarProps {
  sticky?: boolean
  stickyOffsetTop?: number
  zIndex?: number | string
  highlightColor?: string
  onClick?: (value: string | number) => void
  onChange?: (value: string | number) => void
  'onUpdate:modelValue'?: (value: string | number) => void
}

export class IndexBar extends VarComponent {
  $props: IndexBarProps

  scrollTo: (index: number | string) => void
}
