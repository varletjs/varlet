import { VarComponent } from './varComponent'

export interface VarFile {
  file?: File
  name?: string
  url?: string
  cover?: string
  fit?: string
  state?: 'loading' | 'success' | 'error'
}

export type UploaderValidateTriggers = 'onChange' | 'onRemove'

interface UploaderProps {
  modelValue?: VarFile[]
  accept?: string
  capture?: string
  multiple?: boolean
  readonly?: boolean
  disabled?: boolean
  removable?: boolean
  maxlength?: string | number
  maxsize?: string | number
  previewed?: boolean
  ripple?: boolean
  validateTrigger?: Array<UploaderValidateTriggers>
  rules?: Array<(v: VarFile) => any>
  onBeforeRead?: (file: VarFile) => Promise<boolean> | boolean
  onAfterRead?: (file: VarFile) => any
  onOversize?: (file: VarFile) => any
  onRemove?: (file: VarFile) => any
  'onUpdate:modelValue'?: (files: VarFile[]) => any
}

export class Uploader extends VarComponent {
  $props: UploaderProps

  getLoading(varFiles: VarFile[]): VarFile[]

  getSuccess(varFiles: VarFile[]): VarFile[]

  getError(varFiles: VarFile[]): VarFile[]

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}
