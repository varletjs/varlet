import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export interface VarFile extends BasicAttributes {
  file?: File
  name?: string
  url?: string
  cover?: string
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  state?: 'loading' | 'success' | 'error'
}

export type UploaderValidateTriggers = 'onChange' | 'onRemove'

export type UploaderVarFileUtils = {
  getLoading(): VarFile[]
  getSuccess(): VarFile[]
  getError(): VarFile[]
}

interface UploaderProps {
  modelValue?: VarFile[]
  accept?: string
  capture?: boolean | 'user' | 'environment'
  multiple?: boolean
  readonly?: boolean
  disabled?: boolean
  removable?: boolean
  maxlength?: string | number
  maxsize?: string | number
  previewed?: boolean
  hideList?: boolean
  ripple?: boolean
  validateTrigger?: Array<UploaderValidateTriggers>
  rules?: Array<(v: VarFile[], u: UploaderVarFileUtils) => any>
  onBeforeRead?: (file: VarFile) => Promise<boolean> | boolean
  onAfterRead?: (file: VarFile) => any
  onOversize?: (file: VarFile) => any
  onBeforeRemove?: (file: VarFile) => any
  onRemove?: (file: VarFile) => any
  'onUpdate:modelValue'?: (files: VarFile[]) => any
}

export class Uploader extends VarComponent {
  $props: UploaderProps

  getLoading(): VarFile[]

  getSuccess(): VarFile[]

  getError(): VarFile[]

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _UploaderComponent extends Uploader {}
