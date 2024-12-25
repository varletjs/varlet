import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { Placement as PopperPlacement } from '@popperjs/core/lib/enums'
import { TeleportProps, VNode } from 'vue'
import { PositioningStrategy } from '@popperjs/core'

export declare const menuSelectProps: Record<keyof MenuSelectProps, any>

type MenuSelectNeededPopperPlacement = Exclude<PopperPlacement, 'auto' | 'auto-start' | 'auto-end'>

export type MenuSelectPlacement =
  | MenuSelectNeededPopperPlacement
  | 'cover-top'
  | 'cover-top-start'
  | 'cover-top-end'
  | 'cover-bottom'
  | 'cover-bottom-start'
  | 'cover-bottom-end'
  | 'cover-left'
  | 'cover-right'

export type MenuSelectTrigger = 'click' | 'hover' | 'manual'

export type MenuSelectStrategy = PositioningStrategy

export type MenuSelectSize = 'normal' | 'mini' | 'small' | 'large'

export type MenuSelectReference = string | HTMLElement

export type MenuSelectOptionLabelRender = (option: MenuSelectOption, checked: boolean) => VNodeChild

export interface MenuSelectOption {
  label?: string | VNode | MenuSelectOptionLabelRender
  value?: any
  disabled?: boolean
  ripple?: boolean
  children?: MenuSelectOption[]

  [key: PropertyKey]: any
}

export interface MenuSelectProps extends BasicAttributes {
  modelValue?: any
  options?: MenuSelectOption[]
  size?: MenuSelectSize
  multiple?: boolean
  scrollable?: boolean
  closeOnSelect?: boolean
  show?: boolean
  disabled?: boolean
  trigger?: MenuSelectTrigger
  reference?: MenuSelectReference
  placement?: MenuSelectPlacement
  strategy?: MenuSelectStrategy
  labelKey?: string
  valueKey?: string
  childrenKey?: string
  offsetX?: string | number
  offsetY?: string | number
  teleport?: TeleportProps['to'] | false
  sameWidth?: boolean
  elevation?: boolean | number | string
  popoverClass?: string
  closeOnClickReference?: boolean
  onOpen?: ListenerProp<() => void>
  onOpened?: ListenerProp<() => void>
  onClose?: ListenerProp<() => void>
  onClosed?: ListenerProp<() => void>
  onSelect?: ListenerProp<(value: any) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: any) => void>
  'onUpdate:show'?: ListenerProp<(show: boolean) => void>
}

export class MenuSelect extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<MenuSelectProps>

  $props: MenuSelectProps

  $slots: {
    default(): VNode[]
    options(): VNode[]
  }

  open(): void

  close(): void

  resize(): void

  setReference(reference: MenuSelectReference): void
}

export class _MenuSelectComponent extends MenuSelect {}
