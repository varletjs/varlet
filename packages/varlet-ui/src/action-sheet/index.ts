import VarActionSheet from './ActionSheet.vue'
import { App, nextTick, reactive } from 'vue'
import { inBrowser } from '../utils/shared'
import { mountInstance } from '../utils/components'

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

let singletonOptions: ActionSheetOptions | null

function ActionSheet(options: ActionSheetOptions): Promise<ActionSheetActions | void> {
  if (!inBrowser) {
    return Promise.resolve()
  }

  return new Promise((resolve) => {
    ActionSheet.close()

    const reactiveActionSheetOptions: ActionSheetOptions = reactive(options)
    singletonOptions = reactiveActionSheetOptions

    const { unmountInstance } = mountInstance(VarActionSheet, reactiveActionSheetOptions, {
      onSelect: (action: ActionItem) => {
        reactiveActionSheetOptions.onSelect?.(action)
        resolve(action)
      },
      onClose: () => {
        reactiveActionSheetOptions.onClose?.()
        resolve('close')
      },
      onClosed: () => {
        reactiveActionSheetOptions.onClosed?.()
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

VarActionSheet.install = function (app: App) {
  app.component(VarActionSheet.name, VarActionSheet)
}

ActionSheet.install = function (app: App) {
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

ActionSheet.Component = VarActionSheet

ActionSheet.install = function (app: App) {
  app.component(ActionSheet.name, ActionSheet)
}

export default ActionSheet
