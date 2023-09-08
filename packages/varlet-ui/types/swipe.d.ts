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

export type SwipePrev = (options?: SwipeToOptions) => void

export type SwipeNext = (options?: SwipeToOptions) => void

export type SwipeTo = (index: number, options?: SwipeToOptions) => void

export interface SwipeIndicatorData {
  index: number
  length: number
  prev: SwipePrev
  next: SwipeNext
  to: SwipeTo
}

export class Swipe extends VarComponent {
  $props: SwipeProps

  $slots: {
    default(): VNode[]
    prev(): VNode[]
    next(): VNode[]
    indicator(data: SwipeIndicatorData): VNode[]
  }

  resize(): void

  prev: SwipePrev

  next: SwipeNext

  to: SwipeTo
}

export class _SwipeComponent extends Swipe {}
