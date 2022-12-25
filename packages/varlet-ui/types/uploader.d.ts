import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'
import { VNode } from 'vue'

export type VarFileFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

export type VarFileState = 'loading' | 'success' | 'error'

export interface VarFile extends BasicAttributes {
  file?: File
  name?: string
  url?: string
  cover?: string
  fit?: VarFileFit
  state?: VarFileState
}

export type UploaderValidateTrigger = 'onChange' | 'onRemove'

export type UploaderVarFileUtils = {
  getLoading(): VarFile[]
  getSuccess(): VarFile[]
  getError(): VarFile[]
}

export type UploaderCapture = boolean | 'user' | 'environment'

export interface UploaderProps {
  modelValue?: VarFile[]
  accept?: string
  capture?: UploaderCapture
  multiple?: boolean
  readonly?: boolean
  disabled?: boolean
  removable?: boolean
  maxlength?: string | number
  maxsize?: string | number
  previewed?: boolean
  hideList?: boolean
  ripple?: boolean
  validateTrigger?: Array<UploaderValidateTrigger>
  rules?: Array<(v: VarFile[], u: UploaderVarFileUtils) => any>
  onBeforeRead?: ListenerProp<(file: VarFile) => Promise<boolean> | boolean>
  onAfterRead?: ListenerProp<(file: VarFile) => any>
  onOversize?: ListenerProp<(file: VarFile) => any>
  onBeforeRemove?: ListenerProp<(file: VarFile) => any>
  onRemove?: ListenerProp<(file: VarFile) => any>
  'onUpdate:modelValue'?: ListenerProp<(files: VarFile[]) => any>
}

export class Uploader extends VarComponent {
  $props: UploaderProps

  $slots: {
    default(): VNode[]
  }

  getLoading(): VarFile[]

  getSuccess(): VarFile[]

  getError(): VarFile[]

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _UploaderComponent extends Uploader {}
