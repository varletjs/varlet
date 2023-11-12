import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { VNode, App, TeleportProps } from 'vue'

export declare const actionSheetProps: Record<keyof ActionSheetProps, any>

export interface ActionSheetProps extends BasicAttributes {
  actions?: ActionItem[]
  show?: boolean
  title?: string
  overlay?: boolean
  overlayClass?: string
  overlayStyle?: Record<string, any>
  lockScroll?: boolean
  closeOnClickAction?: boolean
  closeOnClickOverlay?: boolean
  safeArea?: boolean
  teleport?: TeleportProps['to'] | false
  onOpen?: ListenerProp<() => void>
  onOpened?: ListenerProp<() => void>
  onClose?: ListenerProp<() => void>
  onClosed?: ListenerProp<() => void>
  onSelect?: ListenerProp<(action: ActionItem) => void>
  onClickOverlay?: ListenerProp<() => void>
  'onUpdate:show'?: ListenerProp<(show: boolean) => void>
}

export interface ActionItem {
  name: string
  color?: string
  icon?: string
  namespace?: string
  iconSize?: string | number
  className?: string
  disabled?: boolean
}

export interface ActionSheetOptions {
  actions?: ActionItem[]
  title?: string
  overlay?: boolean
  overlayClass?: string
  overlayStyle?: Record<string, any>
  lockScroll?: boolean
  closeOnClickAction?: boolean
  closeOnClickOverlay?: boolean
  safeArea?: boolean
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  onClickOverlay?: () => void
  onSelect?: (action: ActionItem) => void
}

export class ActionSheetComponent extends VarComponent {
  $props: ActionSheetProps

  $slots: {
    default(): VNode[]
    title(): VNode[]
    actions(): VNode[]
  }
}

export type ActionSheetActions = ActionItem | 'close'

export interface IActionSheet {
  (options?: ActionSheetOptions): Promise<ActionSheetActions>

  Component: typeof ActionSheetComponent

  setDefaultOptions(options: ActionSheetOptions): void

  resetDefaultOptions(): void

  close(): void

  install(app: App): void

  setPropsDefaults: SetPropsDefaults<ActionSheetProps>
}

export class _ActionSheetComponent extends ActionSheetComponent {}

export declare const ActionSheet: IActionSheet
