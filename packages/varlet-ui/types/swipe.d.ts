import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'
import { VNode } from 'vue'

export declare const swipeProps: Record<string, any>

export interface SwipeToOptions {
  event?: boolean
}

export interface SwipeProps extends BasicAttributes {
  loop?: boolean
  autoplay?: string | number
  duration?: string | number
  initialIndex?: string | number
  indicator?: boolean
  indicatorColor?: string
  vertical?: boolean
  touchable?: boolean
  onChange?: ListenerProp<(index: number) => void>
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

  prev(options?: SwipeToOptions): void

  next(options?: SwipeToOptions): void

  to(index: number, options?: SwipeToOptions): void
}

export class _SwipeComponent extends Swipe {}
