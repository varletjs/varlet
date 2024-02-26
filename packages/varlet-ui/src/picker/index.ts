import VarPicker from './Picker.vue'
import { nextTick, reactive, type Component, type TeleportProps } from 'vue'
import { isArray, call } from '@varlet/shared'
import { mountInstance, withInstall, withPropsDefaultsSetter } from '../utils/components'
import { type PickerColumnOption } from './props'
import { props as pickerProps } from './props'

interface PickerOptions {
  modelValue?: (string | number)[]
  columns?: PickerColumnOption[] | PickerColumnOption[][]
  show?: boolean
  title?: string
  textKey?: string
  valueKey?: string
  childrenKey?: string
  toolbar?: boolean
  cascade?: boolean
  optionHeight?: number | string
  optionCount?: number | string
  confirmButtonText?: string
  cancelButtonText?: string
  confirmButtonTextColor?: string
  cancelButtonTextColor?: string
  safeArea?: boolean
  closeOnClickOverlay?: boolean
  teleport?: TeleportProps['to']
  dynamic?: boolean
  onClickOverlay?: () => void
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  onChange?: (values: (string | number)[], indexes: number[], options: PickerColumnOption[]) => void
  onConfirm?: (values: (string | number)[], indexes: number[], options: PickerColumnOption[]) => void
  onCancel?: (values: (string | number)[], indexes: number[], options: PickerColumnOption[]) => void
}

type PickerResolvedState = 'confirm' | 'cancel' | 'close'

interface PickerResolvedData {
  state: PickerResolvedState
  values?: (string | number)[]
  indexes?: number[]
  options?: PickerColumnOption[]
}

let singletonOptions: PickerOptions | null

function Picker(options: PickerOptions | PickerColumnOption[] | PickerColumnOption[][]): Promise<PickerResolvedData> {
  return new Promise((resolve) => {
    Picker.close()

    const pickerOptions: PickerOptions = isArray(options) ? { columns: options } : options
    const reactivePickerOptions: PickerOptions = reactive(pickerOptions)
    reactivePickerOptions.dynamic = true
    reactivePickerOptions.teleport = 'body'
    singletonOptions = reactivePickerOptions

    function resetSingletonOptions() {
      singletonOptions === reactivePickerOptions && (singletonOptions = null)
    }

    const { unmountInstance } = mountInstance(VarPicker, reactivePickerOptions, {
      onConfirm: (values: (string | number)[], indexes: number[], options: PickerColumnOption[]) => {
        call(reactivePickerOptions.onConfirm, values, indexes, options)
        resolve({
          state: 'confirm',
          values,
          indexes,
          options,
        })
        reactivePickerOptions.show = false
        resetSingletonOptions()
      },
      onCancel: (values: (string | number)[], indexes: number[], options: PickerColumnOption[]) => {
        call(reactivePickerOptions.onCancel, values, indexes, options)
        resolve({
          state: 'cancel',
          values,
          indexes,
          options,
        })
        reactivePickerOptions.show = false
        resetSingletonOptions()
      },
      onClose: () => {
        call(reactivePickerOptions.onClose)
        resolve({
          state: 'close',
        })
        resetSingletonOptions()
      },
      onClosed: () => {
        call(reactivePickerOptions.onClosed)
        unmountInstance()
        resetSingletonOptions()
      },
      onRouteChange: () => {
        unmountInstance()
        resetSingletonOptions()
      },
      'onUpdate:show': (value: boolean) => {
        reactivePickerOptions.show = value
      },
    })

    reactivePickerOptions.show = true
  })
}

Picker.close = function () {
  if (singletonOptions == null) {
    return
  }

  const prevSingletonOptions = singletonOptions
  singletonOptions = null
  nextTick().then(() => {
    prevSingletonOptions.show = false
  })
}

Picker.Component = VarPicker as Component
withInstall(VarPicker)
withInstall(VarPicker, Picker)
withPropsDefaultsSetter(Picker, pickerProps)

export { pickerProps }

export const _PickerComponent = VarPicker

export default Picker
