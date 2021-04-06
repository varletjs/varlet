import { App } from 'vue'
import { VarComponent } from './varComponent'
import { CascadeColumn, NormalColumn } from '../src/picker/props'

export class PickerComponent extends VarComponent {}

type Texts = any[]

export type PickerActions = 'confirm' | 'cancel' | 'close'

export interface PickerResolvedData {
  state: PickerActions
  texts?: Texts
  indexes?: number[]
}

interface PickerOptions {
  columns: NormalColumn | CascadeColumn | Texts
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
  onChange?: (texts: Texts, indexes: number[]) => void
  onClosed?: () => void
}

export interface Picker {
  (options: PickerOptions | Texts): Promise<PickerResolvedData>
  install(app: App): void
  close(): void
  Component: PickerComponent
}

export const Picker: Picker
