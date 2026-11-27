import { Placement } from '@popperjs/core'
import { TeleportProps, VNode } from 'vue'
import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export type TourPlacement = Exclude<Placement, 'auto' | 'auto-start' | 'auto-end'>
export type TourTarget = string | HTMLElement | (() => HTMLElement | null | undefined)

export interface TourStep {
  target?: TourTarget
  title?: string
  description?: string
  placement?: TourPlacement
}

export interface TourProps extends BasicAttributes {
  show?: boolean
  current?: number
  steps?: TourStep[]
  placement?: TourPlacement
  width?: string | number
  gap?: number
  gapRadius?: number
  overlay?: boolean
  lockScroll?: boolean
  scrollIntoView?: boolean
  allowTargetInteraction?: boolean
  closeOnClickOverlay?: boolean
  closeOnKeyEscape?: boolean
  showClose?: boolean
  showProgress?: boolean
  prevButtonText?: string
  nextButtonText?: string
  finishButtonText?: string
  closeButtonText?: string
  teleport?: TeleportProps['to'] | false
  onOpen?: ListenerProp<() => void>
  onClose?: ListenerProp<() => void>
  onFinish?: ListenerProp<() => void>
  onChange?: ListenerProp<(current: number, previous: number) => void>
  onClickOverlay?: ListenerProp<(event: MouseEvent) => void>
  'onUpdate:show'?: ListenerProp<(show: boolean) => void>
  'onUpdate:current'?: ListenerProp<(current: number) => void>
}

export interface TourSlotData {
  step: TourStep
  current: number
  total: number
  next(): void
  prev(): void
  close(): void
  finish(): void
}

export declare const tourProps: Record<keyof TourProps, any>

export class Tour extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<TourProps>
  $props: TourProps
  $slots: {
    default(data: TourSlotData): VNode[]
    title(data: TourSlotData): VNode[]
    actions(data: TourSlotData): VNode[]
  }
  open(current?: number): void
  close(): void
  next(): void
  prev(): void
  finish(): void
  resize(): void
}

export class _TourComponent extends Tour {}
