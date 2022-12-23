import VarActionSheet from './ActionSheet.vue'
import type { App, TeleportProps } from 'vue'
import { nextTick, reactive } from 'vue'
import { inBrowser } from '@varlet/shared'
import { call, mountInstance } from '../utils/components'

export type ActionSheetActions = ActionItem | 'close'

export interface ActionItem {
  name: string
  color?: string
  icon?: string
  iconSize?: string | number
  className?: string
  disabled?: boolean
}

interface ActionSheetOptions {
  actions?: ActionItem[]
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
  // internal
  teleport?: TeleportProps['to']
}

let singletonOptions: ActionSheetOptions | null

function ActionSheet(options: ActionSheetOptions): Promise<ActionSheetActions | void> {
  if (!inBrowser()) {
    return Promise.resolve()
  }

  return new Promise((resolve) => {
    ActionSheet.close()

    const reactiveActionSheetOptions: ActionSheetOptions = reactive(options)
    reactiveActionSheetOptions.teleport = 'body'
    singletonOptions = reactiveActionSheetOptions

    const { unmountInstance } = mountInstance(VarActionSheet, reactiveActionSheetOptions, {
      onSelect: (action: ActionItem) => {
        call(reactiveActionSheetOptions.onSelect, action)
        resolve(action)
      },
      onClose: () => {
        call(reactiveActionSheetOptions.onClose)
        resolve('close')
      },
      onClosed: () => {
        call(reactiveActionSheetOptions.onClosed)
        unmountInstance()
        singletonOptions === reactiveActionSheetOptions && (singletonOptions = null)
      },
      onRouteChange: () => {
        unmountInstance()
        singletonOptions === reactiveActionSheetOptions && (singletonOptions = null)
      },
      'onUpdate:show': (value: boolean) => {
        reactiveActionSheetOptions.show = value
      },
    })

    reactiveActionSheetOptions.show = true
  })
}

ActionSheet.Component = VarActionSheet

VarActionSheet.install = function (app: App) {
  app.component(VarActionSheet.name, VarActionSheet)
}

ActionSheet.close = () => {
  if (singletonOptions != null) {
    const prevSingletonOptions = singletonOptions
    singletonOptions = null

    nextTick().then(() => {
      prevSingletonOptions.show = false
    })
  }
}

ActionSheet.install = function (app: App) {
  app.component(VarActionSheet.name, VarActionSheet)
}

export const _ActionSheetComponent = VarActionSheet

export default ActionSheet
