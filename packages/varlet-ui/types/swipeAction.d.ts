import { VNode } from 'vue'
import { ButtonType } from './button'
import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export type SwipeActionSide = 'left' | 'right'

export interface SwipeActionItem {
  key: string | number
  text: string
  type?: ButtonType
  color?: string
  textColor?: string
  disabled?: boolean
}

export declare const swipeActionProps: Record<keyof SwipeActionProps, any>

export interface SwipeActionProps extends BasicAttributes {
  leftActions?: SwipeActionItem[]
  rightActions?: SwipeActionItem[]
  disabled?: boolean
  duration?: string | number
  closeOnClickAction?: boolean
  closeOnClickOutside?: boolean
  onOpen?: ListenerProp<(side: SwipeActionSide) => void>
  onClose?: ListenerProp<() => void>
  onAction?: ListenerProp<(action: SwipeActionItem, side: SwipeActionSide, event: Event) => void>
}

export interface SwipeActionSlotData {
  close: () => void
}

export class SwipeAction extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<SwipeActionProps>

  $props: SwipeActionProps

  $slots: {
    default(): VNode[]
    left(data: SwipeActionSlotData): VNode[]
    right(data: SwipeActionSlotData): VNode[]
  }

  open(side?: SwipeActionSide): void

  close(): void

  resize(): void
}

export class _SwipeActionComponent extends SwipeAction {}
