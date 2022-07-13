import type { App, TeleportProps } from 'vue'
import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

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
  teleport?: TeleportProps['to']
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  onSelect?: (action: ActionItem) => void
  onClickOverlay?: () => void
  'onUpdate:show'?: (show: boolean) => void
}

export interface ActionItem {
  name: string
  color: string
  icon: string
  iconSize: string | number
  className: string
  disabled: boolean
}

export interface ActionSheetOptions {
  actions: ActionItem[]
  show?: boolean
  title?: string
  overlay?: boolean
  overlayClass?: string
  overlayStyle?: Record<string, any>
  lockScroll?: boolean
  closeOnClickAction?: boolean
  closeOnClickOverlay?: boolean
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  onClickOverlay?: () => void
  onSelect?: (action: ActionItem) => void
}

export class ActionSheetComponent extends VarComponent {
  $props: ActionSheetProps
}

export type ActionSheetActions = ActionItem | 'close'

export interface IActionSheet {
  (options: ActionSheetOptions): Promise<ActionSheetActions>
  Component: typeof ActionSheetComponent

  close(): void

  install(app: App): void
}

export class _ActionSheetComponent extends ActionSheetComponent {}

export const ActionSheet: IActionSheet
