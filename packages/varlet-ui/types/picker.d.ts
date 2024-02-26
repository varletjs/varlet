import { VarComponent, ListenerProp, SetPropsDefaults } from './varComponent'
import { VNode, App } from 'vue'

export declare const pickerProps: Record<keyof PickerProps, any>

export type PickerColumnOption = {
  text?: string | number
  value?: string | number
  children?: PickerColumnOption[]
  className?: string
  textClassName?: string

  [key: PropertyKey]: any
}

export interface PickerProps {
  modelValue?: (string | number)[]
  columns?: PickerColumnOption[] | PickerColumnOption[][]
  title?: string
  textKey?: string
  valueKey?: string
  childrenKey?: string
  toolbar?: boolean
  cascade?: boolean
  optionHeight?: string | number
  optionCount?: string | number
  confirmButtonText?: string
  cancelButtonText?: string
  confirmButtonTextColor?: string
  cancelButtonTextColor?: string
  onChange?: ListenerProp<(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) => void>
  onConfirm?: ListenerProp<(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) => void>
  onCancel?: ListenerProp<(values: (string | number)[], indexes: number[], options: PickerColumnOption[]) => void>
  'onUpdate:modelValue'?: ListenerProp<(values: (string | number)[]) => void>
}

export class PickerComponent extends VarComponent {
  $props: PickerProps

  $slots: {
    cancel(): VNode[]
    title(): VNode[]
    confirm(): VNode[]
  }

  confirm(): void

  cancel(): void
}

export type PickerActions = 'confirm' | 'cancel' | 'close'

export interface PickerResolvedData {
  state: PickerResolvedState
  values?: (string | number)[]
  indexes?: number[]
  options?: PickerColumnOption[]
}

export interface PickerOptions {
  modelValue?: (string | number)[]
  columns?: PickerColumnOption[] | PickerColumnOption[][]
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
  onClickOverlay?: () => void
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  onChange?: (values: (string | number)[], indexes: number[], options: PickerColumnOption[]) => void
  onConfirm?: (values: (string | number)[], indexes: number[], options: PickerColumnOption[]) => void
  onCancel?: (values: (string | number)[], indexes: number[], options: PickerColumnOption[]) => void
}

export interface IPicker {
  (options: PickerOptions | PickerColumnOption[] | PickerColumnOption[][]): Promise<PickerResolvedData>
  Component: typeof PickerComponent

  install(app: App): void

  setPropsDefaults: SetPropsDefaults<PickerProps>

  close(): void
}

export const Picker: IPicker

export class _PickerComponent extends PickerComponent {}
