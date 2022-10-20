import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export interface SwipeProps extends BasicAttributes {
  loop?: boolean
  autoplay?: string | number
  duration?: string | number
  initialIndex?: string | number
  indicator?: boolean
  indicatorColor?: string
  vertical?: boolean
  touchable?: boolean
  onChange?: (index: number) => void
}

export interface SwipeIndicatorData {
  index: number
  length: number
}

export class Swipe extends VarComponent {
  $props: SwipeProps

  $slots: {
    default(): VNode[]
    indicator(data: SwipeIndicatorData): VNode[]
  }

  resize(): void

  prev(): void

  next(): void

  to(index: number): void
}

export class _SwipeComponent extends Swipe {}
