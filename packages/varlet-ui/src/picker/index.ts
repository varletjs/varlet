import VarPicker from './Picker.vue'
import { App, Component, nextTick, reactive } from 'vue'
import { NormalColumn, CascadeColumn } from './props'
import { isArray } from '../utils/shared'
import { mountInstance } from '../utils/components'

export type Texts = any[]

interface PickerOptions {
  columns: NormalColumn | CascadeColumn | Texts
  show?: boolean
  title?: string
  textKey?: string
  toolbar?: boolean
  cascade?: boolean
  optionHeight?: number | string
  optionCount?: number | string
  confirmButtonText?: string
  cancelButtonText?: string
  confirmButtonTextColor?: string
  cancelButtonTextColor?: string
  dynamic?: boolean
  onChange?: (texts: Texts, indexes: number[]) => void
  onClosed?: () => void
}

type PickerResolvedState = 'confirm' | 'cancel' | 'close'

interface PickerResolvedData {
  state: PickerResolvedState
  texts?: Texts
  indexes?: number[]
}

let singletonOptions: PickerOptions | null

function Picker(options: PickerOptions | Texts): Promise<PickerResolvedData> {
  return new Promise((resolve) => {
    Picker.close()

    const pickerOptions: PickerOptions = isArray(options) ? { columns: options } : options
    const reactivePickerOptions: PickerOptions = reactive(pickerOptions)
    reactivePickerOptions.dynamic = true

    singletonOptions = reactivePickerOptions

    const { unmountInstance } = mountInstance(VarPicker, reactivePickerOptions, {
      onConfirm: (texts: Texts, indexes: number[]) => {
        resolve({
          state: 'confirm',
          texts,
          indexes,
        })
        reactivePickerOptions.show = false
        singletonOptions === reactivePickerOptions && (singletonOptions = null)
      },
      onCancel: (texts: Texts, indexes: number[]) => {
        resolve({
          state: 'cancel',
          texts,
          indexes,
        })
        reactivePickerOptions.show = false
        singletonOptions === reactivePickerOptions && (singletonOptions = null)
      },
      onClose: () => {
        resolve({
          state: 'close',
        })
        singletonOptions === reactivePickerOptions && (singletonOptions = null)
      },
      onRouteChange: () => {
        unmountInstance()
        singletonOptions === reactivePickerOptions && (singletonOptions = null)
      },
      onClosed: () => {
        reactivePickerOptions.onClosed?.()
        unmountInstance()
        singletonOptions === reactivePickerOptions && (singletonOptions = null)
      },
      'onUpdate:show': (value: boolean) => {
        reactivePickerOptions.show = value
      },
    })

    reactivePickerOptions.show = true
  })
}

Picker.Component = VarPicker as Component

Picker.install = function (app: App) {
  app.component(VarPicker.name, VarPicker)
}

Picker.close = () => {
  if (singletonOptions != null) {
    const prevSingletonOptions = singletonOptions
    singletonOptions = null

    nextTick().then(() => {
      prevSingletonOptions.show = false
    })
  }
}

export default Picker
