import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { VNode } from 'vue'

export declare const swipeProps: Record<keyof SwipeProps, any>

export interface SwipeToOptions {
  event?: boolean
}

export type SwipeNavigation = 'hover'

export interface SwipeProps extends BasicAttributes {
  loop?: boolean
  autoplay?: string | number
  duration?: string | number
  initialIndex?: string | number
  indicator?: boolean
  indicatorColor?: string
  vertical?: boolean
  touchable?: boolean
  navigation?: boolean | SwipeNavigation
  onChange?: ListenerProp<(index: number) => void>
}

export type SwipePrev = (options?: SwipeToOptions) => void

export type SwipeNext = (options?: SwipeToOptions) => void

export type SwipeTo = (index: number, options?: SwipeToOptions) => void

export interface SwipeIndicatorData {
  index: number
  length: number
  hovering: boolean
  prev: SwipePrev
  next: SwipeNext
  to: SwipeTo
}

export class Swipe extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<SwipeProps>

  $props: SwipeProps

  $slots: {
    default(): VNode[]
    prev(data: SwipeIndicatorData): VNode[]
    next(data: SwipeIndicatorData): VNode[]
    indicator(data: SwipeIndicatorData): VNode[]
  }

  resize(): void

  prev: SwipePrev

  next: SwipeNext

  to: SwipeTo
}

export class _SwipeComponent extends Swipe {}
