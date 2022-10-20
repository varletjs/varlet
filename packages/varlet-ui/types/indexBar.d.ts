import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export interface IndexBarProps extends BasicAttributes {
  sticky?: boolean
  stickyOffsetTop?: number | string
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

  $slots: {
    default(): VNode[]
  }

  scrollTo: (index: number | string) => void
}

export class _IndexBarComponent extends IndexBar {}
