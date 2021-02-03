import { App, reactive } from 'vue'
import VarPicker from './Picker.vue'
import { NormalColumn, CascadeColumn } from './props'
import { isArray } from '../utils/shared'
import { mountInstance } from '../utils/components'

interface PickerOptions {
  columns: NormalColumn | CascadeColumn | any[]
  show?: boolean
  title?: string
  textKey?: string
  toolbar?: boolean
  cascade?: boolean
  optionHeight?: number
  optionCount?: number
  confirmButtonText?: string
  cancelButtonText?: string
  confirmButtonColor?: string
  cancelButtonColor?: string
  dynamic?: boolean
  onChange?: (texts: any[], indexes: number[]) => void
  onClosed?: () => void
}

type PickerResolvedState = 'confirm' | 'cancel' | 'close' | 'exist'

interface PickerResolvedData {
  state: PickerResolvedState
  texts?: any[]
  indexes?: number[]
}

let singletonOptions: PickerOptions | null

function Picker(options: PickerOptions | any[]): Promise<PickerResolvedData> {
  return new Promise((resolve) => {
    if (singletonOptions) {
      resolve({
        state: 'exist',
      })
    }
    const pickerOptions: PickerOptions = isArray(options) ? { columns: options } : options
    const reactivePickerOptions: PickerOptions = reactive(pickerOptions)
    reactivePickerOptions.dynamic = true

    singletonOptions = reactivePickerOptions

    const { unmountInstance } = mountInstance(VarPicker, reactivePickerOptions, {
      onConfirm: (texts: any[], indexes: number[]) => {
        resolve({
          state: 'confirm',
          texts,
          indexes,
        })
        reactivePickerOptions.show = false
      },
      onCancel: (texts: any[], indexes: number[]) => {
        resolve({
          state: 'cancel',
          texts,
          indexes,
        })
        reactivePickerOptions.show = false
      },
      onClose: () => {
        resolve({
          state: 'close',
        })
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

Picker.Component = VarPicker

Picker.install = function (app: App) {
  app.component(VarPicker.name, VarPicker)
}

Picker.close = () => {
  if (singletonOptions) {
    singletonOptions.show = false
    singletonOptions = null
  }
}

export default Picker
